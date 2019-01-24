import React, { useContext } from 'react'
import { ThemeContext } from 'Common'
import { StyledTitle } from './styles'

export const PageTitle = ({ children }) => {
	const { theme } = useContext(ThemeContext)
	return <StyledTitle theme={theme}>{children}</StyledTitle>
}
