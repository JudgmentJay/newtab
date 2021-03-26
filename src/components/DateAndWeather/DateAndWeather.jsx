import React from 'react'

import {
	Today,
	Weather
} from '../../components'

import styles from './styles.module.scss'

const DateAndWeather = () => {
	return (
		<div className={styles.dateAndWeather}>
			<Weather />
			<Today />
		</div>
	)
}

export default DateAndWeather
