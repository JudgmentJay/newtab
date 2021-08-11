import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './_styles.module.scss'

const Box = ({
	modifier,
	children
}) => {
	const classes = classNames(styles.box, {
		[styles[`box--${modifier}`]]: modifier
	})

	return (
		<div className={classes}>
			{children}
		</div>
	)
}

Box.propTypes = {
	modifier: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default Box
