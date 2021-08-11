import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { fetchAll } from '../../services/fetch'

import { ModalContext } from '../../context/modal'

import {
	BookmarkCategory,
	Modal
} from '../../components'

import { EditBookmark } from '../../modals'

import styles from './styles.module.scss'

const Bookmarks = ({ editMode }) => {
	const { modalVisible } = useContext(ModalContext)

	const [bookmarks, setBookmarks] = useState([])

	useEffect(() => {
		getBookmarks()
	}, [])

	const getBookmarks = () => {
		const callback = (result) => setBookmarks(result)

		fetchAll(callback)
	}

	const categories = ['Anime', 'Games', 'Social', 'Japanese', 'Shopping', 'Work', 'Finances', 'Other']

	return (
		<React.Fragment>
			<div className={styles.container}>
				{
					categories.map((category) => {
						return (
							<BookmarkCategory
								category={category}
								bookmarks={bookmarks.filter((bookmark => bookmark.category === category))}
								editMode={editMode}
								key={`${category}Box`} />
						)
					})
				}
			</div>

			{ modalVisible &&
				<Modal>
					<EditBookmark getBookmarks={getBookmarks} />
				</Modal>
			}
		</React.Fragment>
	)
}

Bookmarks.propTypes = {
	editMode: PropTypes.bool.isRequired
}

export default Bookmarks
