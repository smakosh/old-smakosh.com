import React from 'react'
import { Wrapper, Grow, Title } from './styles'

export default ({ theme, icon, title, description }) => (
	<Wrapper theme={theme}>
		<Grow>
			<img src={icon} alt={title} />
		</Grow>
		<Title>{title}</Title>
		<p>{description}</p>
	</Wrapper>
)
