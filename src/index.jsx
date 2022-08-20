import React, { useState, Fragment } from 'react'
import { createRoot } from 'react-dom/client'

import './scss/global.scss'

import {
	Bookmarks,
	CornerBoxes,
	EditToggle
} from './components'

const NewTab = () => {
	const [editMode, setEditMode] = useState(false)

	return (
		<Fragment>
			<Bookmarks editMode={editMode} />
			<CornerBoxes />
			<EditToggle
				editMode={editMode}
				setEditMode={setEditMode} />
			<div id="react-portal"></div>
		</Fragment>
	)
}

const container = document.getElementById('newtab')
const root = createRoot(container)
root.render(<NewTab />)
