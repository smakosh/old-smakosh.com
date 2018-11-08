import React from 'react'
import { ThemeContext } from 'Common'
import { StyledTitle } from './styles'

const PageTitle = ({ children }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<StyledTitle theme={theme}>
				{children}
			</StyledTitle>
		)}
	</ThemeContext.Consumer>
)

export { PageTitle }
