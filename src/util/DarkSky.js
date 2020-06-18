const apiKey = '4430634ba83a2a17a47d265d2c1ded3b'
const latitude = '30.2973'
const longitude = '-97.8105'
const exclusions = 'minutely,hourly,alerts,flags'

const proxy = '/proxy/'

const DarkSky = {
	getWeather() {
		return fetch(`${proxy}https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}?exclude=${exclusions}`, {
			headers: {
				'x-requested-with': 'XMLHttpRequest'
			}
		})
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
				sunrise: jsonResponse.daily.data[0].sunriseTime,
				sunset: jsonResponse.daily.data[0].sunsetTime
			}))
	}
}

export default DarkSky
