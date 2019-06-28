import React, { useState, useEffect } from 'react'

import DarkSky from '../util/DarkSky'

const Weather = () => {
	const initialState = {
		temperature: 70,
		icon: 'clear-day'
	}

	const [weather, setWeather] = useState(initialState)

	useEffect(() => {
		DarkSky.getWeather().then(result => setWeather(result))
	}, [])

	return (
		<div className="weather">
			<img className="weather__icon" src={`img/${weather.icon}.webp`} alt="Current weather" />
			<div className="weather__temp">{Math.round(weather.temperature)}&deg;</div>

			<a className="weather__link" href="https://darksky.net/forecast/30.2973,-97.8105/us12/en"></a>
		</div>
	)
}

export default Weather
