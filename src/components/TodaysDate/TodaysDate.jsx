import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../../components'

const TodaysDate = ({ time }) => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]

	const currentMonth = months[time.getMonth()]

	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	]

	const currentDay = days[time.getDay()]
	const currentDate = time.getDate()

	return <Box>{currentDay}, {currentMonth} {currentDate}</Box>
}

TodaysDate.propTypes = {
	time: PropTypes.instanceOf(Date).isRequired
}

export default TodaysDate
