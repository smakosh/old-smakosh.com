import React from 'react'
import { Wrapper, Grow, Title } from './styles'

export default ({ icon, title }) => (
	<Wrapper>
		<Grow src={icon} alt={title} />
		<Title>{title}</Title>
	</Wrapper>
)
