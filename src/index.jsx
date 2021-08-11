import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './scss/global.scss'

import { ModalProvider } from './context/modal'

import {
	Bookmarks,
	CornerBoxes,
	EditToggle
} from './components'

const NewTab = () => {
	const [editMode, setEditMode] = useState(false)

	return (
		<ModalProvider>
			<Bookmarks editMode={editMode} />
			<CornerBoxes />
			<EditToggle
				editMode={editMode}
				setEditMode={setEditMode} />
		</ModalProvider>
	)
}

ReactDOM.render(<NewTab />, document.getElementById('newtab'))
