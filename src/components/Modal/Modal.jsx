import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Portal } from '../../components'

import * as styles from './_styles.module.scss'

const Modal = ({
	children,
	handleCloseModal
}) => {
	useEffect(() => {
		const closeModal = (e) => {
			if (e.key === 'Escape') {
				handleCloseModal()
			}
		}

		document.addEventListener('keydown', closeModal)

		return () => document.removeEventListener('keydown', closeModal)
	}, [handleCloseModal])

	return (
		<Portal wrapperId="react-portal">
			<div className={styles.modal}>
				{children}
			</div>
			<div className={styles.background} onClick={() => handleCloseModal()}></div>
		</Portal>
	)
}

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	handleCloseModal: PropTypes.func.isRequired
}

export default Modal
