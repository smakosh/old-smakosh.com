import React from 'react'
import { SingleSkill, Grow, Title } from './styles'

const Skill = ({ icon, title }) => (
	<SingleSkill style={{ textAlign: 'center' }}>
		<Grow src={icon} alt={title} />
		<Title style={{ fontWeight: 'normal' }}>{title}</Title>
	</SingleSkill>
)

export default Skill
