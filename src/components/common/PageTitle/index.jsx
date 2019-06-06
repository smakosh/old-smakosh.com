import React, { useContext } from 'react'
import { ThemeContext } from 'components/common'
import { StyledTitle } from './styles'

export const PageTitle = ({ children }) => {
	const { theme } = useContext(ThemeContext)
	return <StyledTitle theme={theme}>{children}</StyledTitle>
}
