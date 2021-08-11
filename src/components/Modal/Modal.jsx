import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import { ModalContext } from '../../context/modal'

import styles from './_styles.module.scss'

const Modal = ({ children }) => {
	const { dispatch: modalDispatch } = useContext(ModalContext)

	useEffect(() => {
		const closeModal = (e) => {
			if (e.key === 'Escape') {
				modalDispatch({ type: 'CLOSE_MODAL' })
			}
		}

		document.addEventListener('keydown', closeModal)

		return () => document.removeEventListener('keydown', closeModal)
	}, [modalDispatch])

	return (
		<React.Fragment>
			<div className={styles.modal}>
				{children}
			</div>
			<div className={styles.background} onClick={() => modalDispatch({ type: 'CLOSE_MODAL' })}></div>
		</React.Fragment>
	)
}

Modal.propTypes = {
	children: PropTypes.node.isRequired
}

export default Modal
