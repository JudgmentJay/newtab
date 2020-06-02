import React, { useState, useEffect } from 'react'

import DarkSky from '../util/DarkSky'

const Weather = () => {
	const [weather, setWeather] = useState({})

	useEffect(() => {
		DarkSky.getWeather().then(result => setWeather({...result, loaded: true}))
	}, [])

	return (
		<React.Fragment>
			{ weather.loaded &&
				<div className="weather">
					<a href="https://darksky.net/forecast/30.2973,-97.8105/us12/en" rel="noreferrer noopener" target="_top">
						<img className="weather__icon" src={`img/${weather.icon}.webp`} alt="Current weather" />
					</a>
					<div className="weather__temp">{Math.round(weather.temperature)}&deg;</div>
				</div>
			}
		</React.Fragment>
	)
}

export default Weather
