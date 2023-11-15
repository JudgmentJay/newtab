import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Modal } from '../../components'
import { EditBookmark } from '../../modals'

import styles from './styles.module.scss'

const BookmarkCategory = ({
	category,
	bookmarks,
	getBookmarks,
	editMode
}) => {
	const [isActive, setIsActive] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [bookmarkToEdit, setBookmarkToEdit] = useState(null)

	const handleEditBookmark = (e, bookmark) => {
		if (editMode) {
			e.preventDefault()

			setBookmarkToEdit(bookmark)
			setIsModalOpen(true)
		}
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
		setBookmarkToEdit(null)
	}

	const boxClasses = classNames(styles.container, {
		[`${styles['container--active']}`]: isActive,
		[`${styles['container--editMode']}`]: editMode
	})

	return (
		<Fragment>
			<div className={boxClasses}>
				<div className={styles.content}>
					<h1 className={styles.boxHeader} onClick={() => setIsActive(!isActive)}>{category}</h1>
					<ul className={styles.links}>
						{
							bookmarks.map((bookmark, i) => (
								<li key={`${category}Link${i}`}>
									<a className={styles.link} href={bookmark.url} rel="noreferrer nofollow noopener" onClick={(e) => handleEditBookmark(e, bookmark)}>
										{bookmark.site}
									</a>
								</li>
							)
							)
						}
						<li><a className={`${styles.link} ${styles.addNew}`} onClick={() => setIsModalOpen(true)}>+ Add New</a></li>
					</ul>
				</div>
			</div>

			{ isModalOpen &&
				<Modal handleCloseModal={handleCloseModal}>
					<EditBookmark
						bookmark={bookmarkToEdit}
						category={category}
						getBookmarks={getBookmarks}
						handleCloseModal={handleCloseModal} />
				</Modal>
			}
		</Fragment>
	)
}

BookmarkCategory.propTypes = {
	category: PropTypes.string.isRequired,
	bookmarks: PropTypes.array.isRequired,
	getBookmarks: PropTypes.func.isRequired,
	editMode: PropTypes.bool.isRequired
}

export default BookmarkCategory
