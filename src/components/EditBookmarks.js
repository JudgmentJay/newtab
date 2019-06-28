import React, { useContext, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { ModalContext } from '../context/modal'

const EditBookmarks = ({ getBookmarks }) => {
	const modalContext = useContext(ModalContext)

	const {
		modalType,
		bookmark,
		category,
	} = modalContext

	const [password, setPassword] = useState('')
	const [site, setSite] = useState(modalType === 'edit' ? bookmark.site : '')
	const [url, setUrl] = useState(modalType === 'edit' ? bookmark.url : '')

	const siteFieldRef = useRef(null)

	useEffect(() => {
		siteFieldRef.current.focus()
	}, [])

	useEffect(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				modalContext.dispatch({ type: 'CLOSE_MODAL' })
			}
		})

		return () => {
			document.removeEventListener('keydown', (e) => {
				if (e.key === 'Escape') {
					modalContext.dispatch({ type: 'CLOSE_MODAL' })
				}
			})
		}
	}, [modalContext])

	const addBookmark = () => {
		if (site !== '' && url !== '') {
			const data = {
				password,
				site,
				url,
				category
			}

			fetch(`http://localhost:3010/bookmarks/write`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(response => {
				if (response.status === 400) {
					alert('Invalid Password')
				} else if (response.ok) {
					getBookmarks()

					setTimeout(() => {
						modalContext.dispatch({ type: 'CLOSE_MODAL' })
					}, 20)
				}
			})
		}
	}

	const updateBookmark = () => {
		if (site !== '' && url !== '') {
			const data = {
				password,
				site,
				url
			}

			fetch(`http://localhost:3010/bookmarks/edit/${bookmark.rowid}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(response => {
				if (response.status === 400) {
					alert('Invalid Password')
				} else if (response.ok) {
					getBookmarks()

					setTimeout(() => {
						modalContext.dispatch({ type: 'CLOSE_MODAL' })
					}, 20)
				}
			})
		}
	}

	const deleteBookmark = () => {
		const data = {
			password
		}

		fetch(`http://localhost:3010/bookmarks/delete/${bookmark.rowid}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(response => {
			if (response.status === 400) {
				alert('Invalid Password')
			} else if (response.ok) {
				getBookmarks()

				setTimeout(() => {
					modalContext.dispatch({ type: 'CLOSE_MODAL' })
				}, 20)
			}
		})
	}

	return (
		<div id="modalBackground">
			<div className="editBookmark">
				<h2>{ modalType === 'add' ? 'Add' : 'Edit' } Bookmark</h2>
				<div className="editBookmark__field"><input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input></div>
				<div className="editBookmark__field"><input type="text" value={site} placeholder="Site Name" onChange={(e) => setSite(e.target.value)} ref={siteFieldRef} /></div>
				<div className="editBookmark__field"><input type="text" value={url} placeholder="Site URL" onChange={(e) => setUrl(e.target.value)} /></div>
				<div className="editBookmark__buttons">
					<button className="editBookmark__button" onClick={modalType === 'add' ? () => addBookmark() : () => updateBookmark()}>{ modalType === 'add' ? 'Add' : 'Update' }</button>
					{ modalType === 'edit' && <button className="editBookmark__button editBookmark__button--delete" onClick={() => deleteBookmark()}>Delete</button> }
					<button className="editBookmark__button" onClick={() => modalContext.dispatch({ type: 'CLOSE_MODAL' })}>Cancel</button>
				</div>
			</div>
		</div>
	)
}

EditBookmarks.propTypes = {
	getBookmarks: PropTypes.func.isRequired
}

export default EditBookmarks
