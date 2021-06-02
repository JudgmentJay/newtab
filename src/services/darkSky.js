const axios = require('axios')

const latitude = '30.2973'
const longitude = '-97.8105'
const exclusions = 'minutely,hourly,alerts,flags'

exports.getWeather = () => {
	return axios.get(`/weather/${latitude}_${longitude}_${exclusions}`)
		.then((weather) => weather.data)
		.catch((error) => {
			console.error(error.response.data)

			return null
		})
}
