import React from 'react'
import { StyledSubtitle } from './styles'
import { ThemeContext } from '../ThemeContext'

const Subtitle = ({ children, active }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<StyledSubtitle theme={theme} active={active}>
				{children}
			</StyledSubtitle>
		)}
	</ThemeContext.Consumer>
)

export { Subtitle }
