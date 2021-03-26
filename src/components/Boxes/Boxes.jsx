import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { fetchAll } from '../../services/fetch'

import { ModalContext } from '../../context/modal'

import { Box } from '../../components'

import { EditBookmark } from '../../modals'

import styles from './styles.module.scss'

const Boxes = ({ editMode }) => {
	const modalContext = useContext(ModalContext)

	const modalVisible = modalContext.modalVisible

	const [bookmarks, setBookmarks] = useState([])

	useEffect(() => {
		getBookmarks()
	}, [])

	const getBookmarks = () => {
		const callback = (result) => setBookmarks(result)

		fetchAll(callback)
	}

	const categories = ['Anime', 'Games', 'Social', 'Japanese', 'Shopping', 'Work', 'Bills', 'Other']

	return (
		<React.Fragment>
			<div className={styles.boxes}>
				{
					categories.map((category) => {
						return (
							<Box
								category={category}
								bookmarks={bookmarks.filter((bookmark => bookmark.category === category))}
								editMode={editMode}
								key={`${category}Box`} />
						)
					})
				}
			</div>

			{ modalVisible && <EditBookmark getBookmarks={getBookmarks} /> }
		</React.Fragment>
	)
}

Boxes.propTypes = {
	editMode: PropTypes.bool.isRequired
}

export default Boxes
