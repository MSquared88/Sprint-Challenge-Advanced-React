import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
	

	const [storedValue, setStoredValue] = useState(() => {
		const prevStoredItem = window.localStorage.getItem(key)

		return prevStoredItem ? JSON.parse(prevStoredItem) : initialValue
	})
	const setValue = value => {
		window.localStorage.setItem(key, JSON.stringify(value))
		setStoredValue(value)

	}

 	return[storedValue, setValue]
}