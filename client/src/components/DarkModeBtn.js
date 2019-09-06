import { Checkbox } from 'semantic-ui-react'
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode'


function DarkModeBtn() {
	const [darkMode, setDarkMode] = useDarkMode(false);
	const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
	};
	
	return(
		<>
			<Checkbox 
			toggle 
			onClick={toggleMode}
			/>
		</>
	)

}

export default DarkModeBtn