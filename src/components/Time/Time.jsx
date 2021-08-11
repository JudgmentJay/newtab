import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../../components'

const Time = ({ time }) => {
	let hour = time.getHours()
	let minutes = time.getMinutes()
	let amOrPm = 'AM'

	if (minutes < 10) {
		minutes = `0${minutes}`
	}

	if (hour >= 12) {
		amOrPm = 'PM'
	}

	if (hour === 0) {
		hour = 12
	}

	if (hour > 12) {
		hour = hour - 12
	}

	const currentTime = `${hour}:${minutes} ${amOrPm}`

	return <Box modifier="marginRight">{currentTime}</Box>
}

Time.propTypes = {
	time: PropTypes.instanceOf(Date).isRequired
}

export default Time
