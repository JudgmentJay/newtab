import React, { useState, useEffect } from 'react'

import { getWeather } from '../../services/darkSky'

import {
	Time,
	TodaysDate,
	Weather
} from '../../components'

import styles from './styles.module.scss'

const CornerBoxes = () => {
	const [weather, setWeather] = useState(null)
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		getWeather()
			.then((weather) => {
				if (weather) {
					setWeather(weather)
				}
			})
	}, [])

	useEffect(() => {
		const seconds = time.getSeconds()

		const timeoutDuration = (60 - seconds) * 1000

		setTimeout(() => {
			setTime(new Date())
		}, timeoutDuration)
	}, [time])

	return (
		<div className={styles.boxes}>
			<div className={styles.alignRight}>
				<Time time={time} />
				{ weather && <Weather weather={weather} /> }
			</div>
			<TodaysDate time={time} />
		</div>
	)
}

export default CornerBoxes
