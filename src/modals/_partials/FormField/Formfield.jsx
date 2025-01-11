import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import * as styles from './_styles.module.scss'

const FormField = ({
	type,
	value,
	placeholder,
	onChange,
	focusOnLoad
}) => {
	const fieldRef = useRef(null)

	useEffect(() => {
		if (focusOnLoad) {
			fieldRef.current.focus()
		}
	}, [focusOnLoad])

	return (
		<div className={styles.field}>
			<input
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				className={styles.input}
				ref={fieldRef} />
		</div>
	)
}

FormField.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	focusOnLoad: PropTypes.bool
}

FormField.defaultProps = {
	focusOnLoad: false
}

export default FormField
