const axios = require('axios')

exports.getWeather = async () => {
	const now = new Date()

	const forecast = await axios.get('/weather/forecast')
		.then((forecast) => {
			console.log(forecast.data)
			return forecast.data
		})
		.catch((error) => {
			console.error(error.response.data)

			const sunrise = new Date(now).setHours(7, 0, 0, 0)
			const sunset = new Date(now).setHours(20, 0, 0, 0)

			return [
				{
					values: {
						sunriseTime: sunrise,
						sunsetTime: sunset
					}
				}
			]
		})

	return axios.get(`/weather`)
		.then(({ data: weatherData }) => {
			const dayIndex = forecast.findIndex((day) => {
				return new Date(day.time).getDate() === now.getDate()
			})

			return {
				sunrise: forecast[dayIndex].values.sunriseTime,
				sunset: forecast[dayIndex].values.sunsetTime,
				...weatherData
			}
		})
		.catch((error) => {
			console.error(error.response.data)

			return null
		})
}
