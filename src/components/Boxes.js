import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { ModalContext } from '../context/modal'

import Box from './Box'
import EditBookmarks from './EditBookmarks'

const Boxes = ({
	editMode
}) => {
	const modalContext = useContext(ModalContext)

	const modalVisible = modalContext.modalVisible

	const [bookmarks, setBookmarks] = useState([])

	useEffect(() => {
		getBookmarks()
	}, [])

	const getBookmarks = () => {
		fetch('http://localhost:3010/bookmarks/read/')
			.then(response => response.json())
			.then(bookmarks => setBookmarks(bookmarks))
	}

	const categories = ['Anime', 'Games', 'Social', 'Japanese', 'Shopping', 'Work', 'Bills', 'Other']

	return (
		<React.Fragment>
			<div id="boxes">
				{
					categories.map((category) => {
						return <Box
							category={category}
							bookmarks={bookmarks.filter((bookmark => bookmark.category === category))}
							editMode={editMode}
							key={`${category}Box`} />
					})
				}
			</div>

			{ modalVisible && <EditBookmarks getBookmarks={getBookmarks} /> }
		</React.Fragment>
	)
}

Boxes.propTypes = {
	editMode: PropTypes.bool.isRequired
}

export default Boxes
