import React from 'react'
import { SingleSkill, Grow, Title } from './styles'

const Skill = ({ icon, title }) => (
	<SingleSkill>
		<Grow src={icon} alt={title} />
		<Title>{title}</Title>
	</SingleSkill>
)

export default Skill
