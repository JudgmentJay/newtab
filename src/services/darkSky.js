const latitude = '30.2973'
const longitude = '-97.8105'
const exclusions = 'minutely,hourly,alerts,flags'

exports.getWeather = () => {
	return fetch(`/weather/${latitude}_${longitude}_${exclusions}`)
		.then((response) => response.json())
		.then((weather) => weather)
		.catch((error) => {
			console.log(`Error fetching weather: ${error}`)

			return null
		})
}
