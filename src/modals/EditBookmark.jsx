import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import { fetchData } from '../services/fetch'

import {
	Button,
	Buttons,
	FormField
} from './_partials'

import { ModalContext } from '../context/modal'

const EditBookmark = ({ getBookmarks }) => {
	const modalContext = useContext(ModalContext)

	const {
		modalType,
		bookmark,
		category,
		dispatch: modalDispatch
	} = modalContext

	const [password, setPassword] = useState('')
	const [site, setSite] = useState(modalType === 'edit' ? bookmark.site : '')
	const [url, setUrl] = useState(modalType === 'edit' ? bookmark.url : '')

	const callback = () => {
		getBookmarks()

		setTimeout(() => {
			modalDispatch({ type: 'CLOSE_MODAL' })
		}, 20)
	}

	const addBookmark = () => {
		if (site !== '' && url !== '') {
			const data = {
				password,
				site,
				url,
				category
			}

			fetchData('/bookmarks/write', 'POST', data, callback)
		}
	}

	const updateBookmark = () => {
		if (site !== '' && url !== '') {
			const data = {
				password,
				site,
				url
			}

			fetchData(`/bookmarks/edit/${bookmark.rowid}`, 'PUT', data, callback)
		}
	}

	const deleteBookmark = () => {
		const data = { password }

		fetchData(`/bookmarks/delete/${bookmark.rowid}`, 'DELETE', data, callback)
	}

	return (
		<React.Fragment>
			<h2>{ modalType === 'add' ? 'Add' : 'Edit' } Bookmark</h2>
			<FormField
				type="password"
				value={password}
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)} />
			<FormField
				type="text"
				value={site}
				placeholder="Site Name"
				onChange={(e) => setSite(e.target.value)}
				focusOnLoad={true} />
			<FormField
				type="text"
				value={url}
				placeholder="Site URL"
				onChange={(e) => setUrl(e.target.value)} />
			<Buttons>
				<Button
					text={modalType === 'add' ? 'Add' : 'Update'}
					onClick={modalType === 'add' ? () => addBookmark() : () => updateBookmark()} />
				{ modalType === 'edit' &&
					<Button
						text="Delete"
						onClick={() => deleteBookmark()}
						modifier="delete" />
				}
				<Button
					text="Cancel"
					onClick={() => modalContext.dispatch({ type: 'CLOSE_MODAL' })} />
			</Buttons>
		</React.Fragment>
	)
}

EditBookmark.propTypes = {
	getBookmarks: PropTypes.func.isRequired
}

export default EditBookmark
