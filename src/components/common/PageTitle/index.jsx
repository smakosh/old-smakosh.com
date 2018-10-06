import React from 'react'
import { StyledTitle } from './styles'
import { ThemeContext } from '../ThemeContext'

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
