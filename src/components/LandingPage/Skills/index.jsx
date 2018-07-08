import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../common'
import Skill from './Skill'
import Graphic from '../../../../static/skills/graphic.svg'
import Uix from '../../../../static/skills/ui.svg'
import WebDev from '../../../../static/skills/webdev.svg'
import './style.scss'

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
		<div className="clip gradient-blue services">   
			<Container>
				<h2>Skills</h2>
				<div className="skill-container">
					{skills.map(skill => <Skill key={skill.id} {...skill} />)}
				</div>
				<div className="tech-used">
					<Link to="/the-tech-tools-I-use">See Tech tools I use.</Link>
				</div>
			</Container>
		</div>
	)
}

export { Skills }
