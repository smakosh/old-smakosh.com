import React from 'react'
import { StyledSubtitle } from './styles'
import { ThemeContext } from '../ThemeContext'

const Subtitle = ({ children }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<StyledSubtitle theme={theme}>
				{children}
			</StyledSubtitle>
		)}
	</ThemeContext.Consumer>
)

export { Subtitle }
