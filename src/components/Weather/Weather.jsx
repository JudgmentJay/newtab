import React, { useState, useEffect, Fragment } from 'react'

import { getWeather } from '../../services/weather'

import { Box } from '../../components'

import weatherCodes from './weatherCodes.json'

import styles from './styles.module.scss'

require.context('../../img', true, /\.(jpe?g|png|gif|svg|webp)$/)

const Weather = () => {
	const [weather, setWeather] = useState(null) 

	useEffect(() => {
		getWeather()
			.then((weather) => {
				if (weather) {
					setWeather(weather)
				}
			})
	}, [])

	const getWeatherIcon = () => {
		const now = new Date()
		const sunrise = new Date(weather.sunrise)
		const sunset = new Date(weather.sunset)

		const dayOrNight = now >= sunrise && now < sunset
			? 'day'
			: 'night'

		return `img/${weatherCodes[dayOrNight][weather.weatherCode]}.webp`
	}

	return (
		<div className={styles.weather}>
			{ weather &&
				<Fragment>
					<Box modifier="marginRight">
						<a href="https://weather.com/weather/today/l/4418e1a285be5f360cf486d182890441ed6095fa1d3abb7aa6e511e49d64182b" rel="noreferrer nofollow noopener">
							<img className={styles.icon} src={getWeatherIcon()} alt="Current weather" />
						</a>
					</Box>
					<Box>
						{Math.round(weather.temperature)}&deg;
					</Box>
				</Fragment>
			}
		</div>
	)
}

export default Weather
