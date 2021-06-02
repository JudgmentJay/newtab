import React, { useState, useEffect } from 'react'

import { getWeather } from '../../services/darkSky'

import styles from './styles.module.scss'

require.context('../../img', true, /\.(jpe?g|png|gif|svg|webp)$/)

const Weather = () => {
	const [weather, setWeather] = useState(null)

	useEffect(() => {
		getWeather()
			.then((weather) => {
				const body = document.getElementsByTagName('body')[0]

				if (weather) {
					const now = new Date()

					const twoHours = 60 * 60 * 2 * 1000
					const halfHour = 60 * 30 * 1000

					const sunrise = weather.sunrise * 1000
					const sunriseStart = sunrise - halfHour
					const sunriseEnd = sunrise + twoHours

					const sunset = weather.sunset * 1000
					const sunsetStart = sunset - twoHours
					const sunsetEnd = sunset + halfHour

					let bodyClass

					if ((now >= sunriseStart && now < sunriseEnd) || (now >= sunsetStart && now < sunsetEnd)) {
						bodyClass = 'golden'
					} else if (now >= sunriseEnd && now < sunsetStart) {
						bodyClass = 'day'
					} else {
						bodyClass = 'night'
					}

					body.classList.add(bodyClass)

					setWeather(weather)
				} else {
					body.classList.add('day')
				}
			})
	}, [])

	return weather
		? (
			<div className={styles.weather}>
				<a href="https://darksky.net/forecast/30.2973,-97.8105/us12/en" rel="noreferrer noopener">
					<img className={styles.icon} src={`img/${weather.icon}.webp`} alt="Current weather" />
				</a>
				<div className={styles.temp}>{Math.round(weather.temperature)}&deg;</div>
			</div>
		)
		: null
}

export default Weather
