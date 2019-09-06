import { useState, useEffect } from 'react'


export const useDarkMode = (initialValue) => {
	const [value, setValue] = useState( initialValue )

	useEffect(() =>{
        const body = document.querySelector('body')
        const jumbotron = document.querySelector(".jumbotron");
        value ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
		value ? jumbotron.classList.add('header-dark-mode') : jumbotron.classList.remove('header-dark-mode')
        
	}, [value])

	return [value, setValue]
}