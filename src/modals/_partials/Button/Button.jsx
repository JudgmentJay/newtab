import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './_styles.module.scss'

const Button = ({
	text,
	onClick,
	modifier
}) => {
	const classes = classNames(styles.button, {
		[styles[`button--${modifier}`]]: Boolean(modifier)
	})

	return (
		<button type="button" onClick={onClick} className={classes}>
			{text}
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	modifier: PropTypes.string
}

export default Button
