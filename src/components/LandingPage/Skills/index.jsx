import React from 'react'
import { Link } from 'gatsby'
import { Container, ThemeContext, Subtitle } from '../../common'
import Skill from './Skill'
import Graphic from '../../../../static/skills/brand.svg'
import Uix from '../../../../static/skills/designer.svg'
import WebDev from '../../../../static/skills/coder.svg'
import { SkillsWrapper, SkillsContainer, Tech } from './styles'

const Skills = () => (
	<ThemeContext.Consumer>
		{({ theme }) => {
			const skills = [
				{
					id: 0,
					title: 'Graphic Design',
					icon: Graphic
				},
				{
					id: 1,
					title: 'UI/UX Design',
					icon: Uix
				},
				{
					id: 2,
					title: 'Full stack development',
					icon: WebDev
				}
			]
			return (
				<SkillsWrapper theme={theme}>
					<Container>
						<Subtitle>Skills</Subtitle>
						<SkillsContainer>
							{skills.map(skill => <Skill key={skill.id} {...skill} />)}
						</SkillsContainer>
						<Tech theme={theme}>
							<Link to="/the-tech-tools-I-use">See Tech tools I use.</Link>
						</Tech>
					</Container>
				</SkillsWrapper>
			)
		}}
	</ThemeContext.Consumer>
)

export { Skills }
