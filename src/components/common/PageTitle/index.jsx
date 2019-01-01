import React from 'react'
import { ThemeContext } from 'Common'
import { StyledTitle } from './styles'

export const PageTitle = ({ children }) => (
	<ThemeContext.Consumer>
		{({ theme }) => <StyledTitle theme={theme}>{children}</StyledTitle>}
	</ThemeContext.Consumer>
)
