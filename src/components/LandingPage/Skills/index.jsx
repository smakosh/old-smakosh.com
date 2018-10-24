import React from 'react'
import { withState } from 'recompose'
import { Link } from 'gatsby'
import { Container, ThemeContext, Subtitle } from '../../common'
import Skill from './Skill'
import Graphic from '../../../../static/skills/brand.svg'
import Uix from '../../../../static/skills/designer.svg'
import WebDev from '../../../../static/skills/coder.svg'
import Branding from '../../../../static/services/branding.svg'
import UiUx from '../../../../static/services/uix.svg'
import Dev from '../../../../static/services/dev.svg'
import SeoIcon from '../../../../static/services/seo.svg'
import { SkillsWrapper, SkillsContainer, Tech, Label, Input, Slider, Flex } from './styles'

const SkillsAndServices = ({ isToggled, toggle }) => (
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
			const services = [
				{
					id: 0,
					title: 'Branding',
					icon: Branding
				},
				{
					id: 1,
					title: 'UI/UX Design',
					icon: UiUx
				},
				{
					id: 2,
					title: 'Front end development',
					icon: Dev
				},
				{
					id: 3,
					title: 'SEO & growth',
					icon: SeoIcon
				}
			]
			return (
				<SkillsWrapper theme={theme}>
					<Container>
						<Flex>
							<Subtitle active={isToggled}>Skills</Subtitle>
							<Label>
								<Input onClick={() => toggle(!isToggled)} type="checkbox" />
								<Slider />
							</Label>
							<Subtitle active={!isToggled}>Services</Subtitle>
						</Flex>
						<SkillsContainer>
							{!isToggled ? (
								skills.map(skill => (<Skill key={skill.id} {...skill} />))
							) : (
								services.map(service => (<Skill smaller key={service.id} {...service} />))
							)}
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

const Skills = withState('isToggled', 'toggle', false)(SkillsAndServices)

export { Skills }
