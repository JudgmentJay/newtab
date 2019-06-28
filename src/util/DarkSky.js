const apiKey = ''
const latitude = ''
const longitude = ''
const exclusions = 'minutely,hourly,alerts,flags'

const proxy = 'http://localhost:3010/proxy/'

const DarkSky = {
	getWeather() {
		return fetch(`${proxy}https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}?exclude=${exclusions}`)
			.then((response) => {
				if (response.status === 200) {
					return response.json()
				} else {
					console.log('Unable to retrieve current weather')
				}
			})
			.then((jsonResponse) => ({
				temperature: jsonResponse.currently.temperature,
				icon: jsonResponse.currently.icon,
				high: jsonResponse.daily.data[0].temperatureHigh,
				low: jsonResponse.daily.data[0].temperatureLow
			}))
	}
}

export default DarkSky
