import React, { useState, useEffect, Fragment } from 'react'

import { getWeather } from '../../services/darkSky'

import { Box } from '../../components'

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

	return (
		<div className={styles.weather}>
			{ weather &&
				<Fragment>
					<Box modifier="marginRight">
						<a href="https://darksky.net/forecast/30.2973,-97.8105/us12/en" rel="noreferrer nofollow noopener">
							<img className={styles.icon} src={`img/${weather.icon}.webp`} alt="Current weather" />
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
