import React, { useState, useEffect } from 'react'

import {
	Time,
	TodaysDate,
	Weather
} from '../../components'

import styles from './styles.module.scss'

const CornerBoxes = () => {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const seconds = time.getSeconds()

		const timeoutDuration = (60 - seconds) * 1000

		setTimeout(() => {
			setTime(new Date())
		}, timeoutDuration)
	}, [time])

	return (
		<div className={styles.boxes}>
			<div className={styles.alignLeft}>
				<Time time={time} />
				<Weather />
			</div>
			<TodaysDate time={time} />
		</div>
	)
}

export default CornerBoxes
