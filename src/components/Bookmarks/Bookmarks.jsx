import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'

import { fetchAll } from '../../services/fetch'

import { BookmarkCategory } from '../../components'

import styles from './styles.module.scss'

const Bookmarks = ({ editMode }) => {
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
		<Fragment>
			{ Boolean(bookmarks.length > 0) &&
				<div className={styles.container}>
					{
						categories.map((category) => (
							<BookmarkCategory
								category={category}
								bookmarks={bookmarks.filter((bookmark) => bookmark.category === category)}
								getBookmarks={getBookmarks}
								editMode={editMode}
								key={`${category}Box`} />
						)
						)
					}
				</div>
			}
		</Fragment>
	)
}

Bookmarks.propTypes = {
	editMode: PropTypes.bool.isRequired
}

export default Bookmarks
