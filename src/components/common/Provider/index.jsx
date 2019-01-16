import React, { useState, useEffect } from 'react'
import { ThemeContext } from 'Common'

export const Provider = ({ children }) => {
	const [theme, setTheme] = useState('light')
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	useEffect(() => {
		const localTheme = localStorage.getItem('theme')
		if (localTheme) {
			setTheme(localTheme)
		}
	}, {})
	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
