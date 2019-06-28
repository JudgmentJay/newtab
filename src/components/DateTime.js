import React from 'react'

const DateTime = () => {
	const getDate = () => {
		const now = new Date()

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

		const currentMonth = months[now.getMonth()]

		const days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		]

		const currentDay = days[now.getDay()]

		return `${currentDay}, ${currentMonth} ${now.getDate()}`
	}

	return <div className="date">{getDate()}</div>
}

export default DateTime
