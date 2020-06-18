import React, { useState, useEffect } from 'react'

import DarkSky from '../util/DarkSky'

const Weather = () => {
	const [weather, setWeather] = useState({})

	useEffect(() => {
		DarkSky.getWeather().then((result) => {
			const now = new Date()

			const twoHours = 60 * 60 * 2 * 1000
			const halfHour = 60 * 30 * 1000

			const sunrise = result.sunrise * 1000
			const sunriseStart = sunrise - halfHour
			const sunriseEnd = sunrise + twoHours

			const sunset = result.sunset * 1000
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

			const body = document.getElementsByTagName('body')[0]

			body.classList.add(bodyClass)

			setWeather({...result, loaded: true})
		})
	}, [])

	return (
		<React.Fragment>
			{ weather.loaded &&
				<div className="weather">
					<a href="https://darksky.net/forecast/30.2973,-97.8105/us12/en" rel="noreferrer noopener">
						<img className="weather__icon" src={`img/${weather.icon}.webp`} alt="Current weather" />
					</a>
					<div className="weather__temp">{Math.round(weather.temperature)}&deg;</div>
				</div>
			}
		</React.Fragment>
	)
}

export default Weather
