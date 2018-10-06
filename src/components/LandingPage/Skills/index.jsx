import React from 'react'
import { Link } from 'gatsby'
import { Container } from '../../common'
import Skill from './Skill'
import Graphic from '../../../../static/skills/graphic.svg'
import Uix from '../../../../static/skills/ui.svg'
import WebDev from '../../../../static/skills/webdev.svg'
import { SkillsWrapper, SkillsContainer, Tech } from './styles'

const Skills = () => {
	const skills = [
		{
			id: 0,
			title: 'Graphic Design',
			icon: `${Graphic}`
		},
		{
			id: 1,
			title: 'UI/UX Design',
			icon: `${Uix}`
		},
		{
			id: 2,
			title: 'Full stack development',
			icon: `${WebDev}`
		},
	]
	return (
		<SkillsWrapper>
			<Container>
				<h2>Skills</h2>
				<SkillsContainer>
					{skills.map(skill => <Skill key={skill.id} {...skill} />)}
				</SkillsContainer>
				<Tech>
					<Link to="/the-tech-tools-I-use">See Tech tools I use.</Link>
				</Tech>
			</Container>
		</SkillsWrapper>
	)
}

export { Skills }
