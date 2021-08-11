import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.scss'

const EditToggle = ({
	editMode,
	setEditMode
}) => {
	const buttonClasses = classNames(styles.button, {
		[`${styles['button--editMode']}`]: editMode
	})

	return (
		<button className={buttonClasses} onClick={(() => setEditMode(!editMode))}>
			<span>+</span>
		</button>
	)
}

EditToggle.propTypes = {
	editMode: PropTypes.bool.isRequired,
	setEditMode: PropTypes.func.isRequired
}

export default EditToggle
