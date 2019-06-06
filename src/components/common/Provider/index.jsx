import React from 'react'
import { ThemeContext } from 'components/common'
import useDarkMode from 'hooks/useDarkMode'

export const Provider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode()

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
