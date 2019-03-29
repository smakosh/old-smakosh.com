import React from 'react'
import { ThemeContext } from 'Common'
import { useDarkMode } from 'Hooks'

export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useDarkMode()
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
