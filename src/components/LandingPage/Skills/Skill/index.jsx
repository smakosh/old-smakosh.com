import React from 'react'
import { SingleSkill, Grow, Title } from './styles'

const Skill = ({ icon, title, smaller }) => (
	<SingleSkill>
		<Grow src={icon} alt={title} smaller={smaller} />
		<Title>{title}</Title>
	</SingleSkill>
)

export default Skill
