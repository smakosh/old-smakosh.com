import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Container } from '../../common'
import Skill from './Skill'
import Graphic from '../../../../static/skills/graphic.svg'
import Uix from '../../../../static/skills/ui.svg'
import WebDev from '../../../../static/skills/webdev.svg'

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

const SkillsWrapper = styled.div`
	margin-bottom: 1.45rem;
	color: white;
	padding: 8rem 1rem 4rem 1rem;
	clip-path: polygon(0% 14%, 100% 0, 100% 84%, 0 100%);
	background-image: linear-gradient(10deg, #0072ff 0%, #00c6ff 100%);
`

const SkillsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
	max-width: 960px;
	margin: 0 auto;

	@media screen and (max-width: 680px) {
		flex-direction: column;
	}
`

const Tech = styled.div`
	text-align: left;
	a {
		color: #fff;
		text-decoration: underline;
	}
`

export { Skills }
