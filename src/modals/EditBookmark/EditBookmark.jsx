import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

import { fetchData } from '../../services/fetch'

import {
	Button,
	Buttons,
	FormField
} from '../_partials'

import * as styles from './_styles.module.scss'

const EditBookmark = ({
	bookmark,
	category,
	getBookmarks,
	handleCloseModal
}) => {
	const [password, setPassword] = useState('')
	const [site, setSite] = useState(bookmark ? bookmark.site : '')
	const [url, setUrl] = useState(bookmark ? bookmark.url : '')

	const callback = () => {
		getBookmarks()
		handleCloseModal()
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
		<Fragment>
			<h2 className={styles.modalHeader}>{ bookmark ? 'Edit' : 'Add' } Bookmark</h2>
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
					text={bookmark ? 'Update' : 'Add'}
					onClick={bookmark ? () => updateBookmark() : () => addBookmark()} />
				{ Boolean(bookmark) &&
					<Button
						text="Delete"
						onClick={() => deleteBookmark()}
						modifier="delete" />
				}
				<Button
					text="Cancel"
					onClick={() => handleCloseModal()} />
			</Buttons>
		</Fragment>
	)
}

EditBookmark.propTypes = {
	bookmark: PropTypes.object,
	category: PropTypes.string.isRequired,
	getBookmarks: PropTypes.func.isRequired,
	handleCloseModal: PropTypes.func.isRequired
}

export default EditBookmark
