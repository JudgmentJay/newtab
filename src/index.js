import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

import './css/main.scss'

require.context('./img', true, /\.(jpe?g|png|gif|svg|webp)$/)

import { ModalProvider } from './context/modal'

import Boxes from './components/Boxes'
import Today from './components/Today'
import Weather from './components/Weather'

const NewTab = () => {
	const [editMode, setEditMode] = useState(false)

	const buttonClasses = classNames(
		{
			'editMode': editMode
		}
	)

	return (
		<ModalProvider>
			<Boxes editMode={editMode} />
			<div id="cornerBox">
				<Weather />
				<Today />
			</div>
			<button id="editModeToggle" className={buttonClasses} onClick={(() => setEditMode(!editMode))}><span>+</span></button>
		</ModalProvider>
	)
}

ReactDOM.render(<NewTab />, document.getElementById('newtab'))
