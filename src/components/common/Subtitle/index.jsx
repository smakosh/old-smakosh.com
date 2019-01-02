import React from 'react'
import { ThemeContext } from 'Common'
import { StyledSubtitle } from './styles'

export const Subtitle = ({ children, active }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<StyledSubtitle theme={theme} active={active}>
				{children}
			</StyledSubtitle>
		)}
	</ThemeContext.Consumer>
)
