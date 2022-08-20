import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

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

const container = document.getElementById('newtab')
const root = createRoot(container)
root.render(<NewTab />)
