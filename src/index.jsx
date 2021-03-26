import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './css/main.scss'

import { ModalProvider } from './context/modal'

import {
	Boxes,
	CornerBox,
	DateAndWeather
} from './components'

const NewTab = () => {
	const [editMode, setEditMode] = useState(false)

	return (
		<ModalProvider>
			<Boxes editMode={editMode} />
			<DateAndWeather />
			<CornerBox
				editMode={editMode}
				setEditMode={setEditMode} />
		</ModalProvider>
	)
}

ReactDOM.render(<NewTab />, document.getElementById('newtab'))
