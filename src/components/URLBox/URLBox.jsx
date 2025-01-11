import React, { useState, useEffect, useRef } from 'react'

import * as styles from './_styles.module.scss'

const URLBox = () => {
	const [textInput, setTextInput] = useState('')

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	const handleNavigation = () => {
		if (textInput.includes('.com')) {
			window.location.assign(`//${textInput}`)
		} else {
			const searchPrefix = textInput.split(' ')[0]

			if (searchPrefix && searchPrefix.length === 1) {
				const searchTerm = textInput.slice(2)
				const encodedSearchTerm = encodeURIComponent(searchTerm)
				const finalSearchTerm = encodedSearchTerm.replace(/%20/g, '+')

				switch(searchPrefix) {
					case 'a': {
						location.href=`https://www.amazon.com/s?k=${finalSearchTerm}`
						break
					}
					case 'd': {
						location.href=`https://www.dictionary.com/browse/${searchTerm}`
						break
					}
					case 'g': {
						location.href=`https://www.google.com/search?q=${finalSearchTerm}`
						break
					}
					case 'n': {
						location.href=`https://nyaa.si/?f=0&c=1_2&q=${finalSearchTerm}`
						break
					}
					case 'p': {
						location.href=`https://www.pcgamingwiki.com/w/index.php?search=${finalSearchTerm}`
						break
					}
					case 'w': {
						const wikipediaSearchTerm = encodedSearchTerm.replace(/%20/g, '_')
						location.href=`https://en.wikipedia.org/w/index.php?search=${wikipediaSearchTerm}`
						break
					}
					case 'y': {
						location.href=`https://www.youtube.com/results?search_query=${finalSearchTerm}`
						break
					}
				}
			} else {
				const encodedSearchTerm = encodeURIComponent(textInput).replace(/%20/g, '+')

				location.href=`https://www.google.com/search?q=${encodedSearchTerm}`
			}
		}
	}

	const handleTextChange = (event) => {
		setTextInput(event.target.value)
	}

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleNavigation()
		}
	}

	return (
		<div className={styles.urlBox}>
			<input className={styles.inputField} onChange={handleTextChange} onKeyDown={handleKeyDown} ref={inputRef} />
		</div>
	)
}

export default URLBox
