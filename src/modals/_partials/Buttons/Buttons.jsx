import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './_styles.module.scss'

const Buttons = ({ children }) => {
	return (
		<div className={styles.buttons}>
			{children}
		</div>
	)
}

Buttons.propTypes = {
	children: PropTypes.node.isRequired
}

export default Buttons
