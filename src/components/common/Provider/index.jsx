import React, { useState, useEffect } from 'react'
import { ThemeContext } from 'Common'

export const Provider = ({ children }) => {
	const [theme, setTheme] = useState('light')
	const toggleTheme = () => {
		if (theme === 'light') {
			localStorage.setItem('theme', 'dark')
			setTheme('dark')
		} else {
			localStorage.setItem('theme', 'light')
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
