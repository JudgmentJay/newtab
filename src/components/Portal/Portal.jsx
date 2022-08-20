import { createPortal } from 'react-dom'

const Portal = ({
	children,
	wrapperId
}) => {
	const element = document.getElementById(wrapperId)

	return createPortal(children, element)
}

export default Portal
