import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../../components'

import styles from './styles.module.scss'

require.context('../../img', true, /\.(jpe?g|png|gif|svg|webp)$/)

const Weather = ({ weather }) => {
	return (
		<div className={styles.weather}>
			<Box modifier="marginRight">
				<a href="https://darksky.net/forecast/30.2973,-97.8105/us12/en" rel="noreferrer nofollow noopener">
					<img className={styles.icon} src={`img/${weather.icon}.webp`} alt="Current weather" />
				</a>
			</Box>
			<Box>
				{Math.round(weather.temperature)}&deg;
			</Box>
		</div>
	)
}

Weather.propTypes = {
	weather: PropTypes.object.isRequired
}

export default Weather
