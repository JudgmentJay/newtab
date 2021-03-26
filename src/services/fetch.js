exports.fetchAll = (callback) => {
	fetch(`/bookmarks/read/`)
		.then((response) => response.json())
		.then(bookmarks => callback(bookmarks))
		.catch((error) => console.log(`Error fetching bookmarks: ${error}`))
}

exports.fetchData = (path, method, data, callback) => {
	fetch(path, {
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then((response) => {
			if (response.status === 400) {
				alert('Invalid Password')
			} else if (response.status === 404) {
				console.log('Error updating bookmarks: Server not found')
			} else if (response.ok) {
				callback()
			}
		})
}
