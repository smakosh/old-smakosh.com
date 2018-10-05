import React from 'react'
import { Card, More, ThemeContext } from '../../common'
import { Wrapper, Work, Icon } from './styles'

const Project = ({ title, projects, link, color, icon, svg }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<Wrapper>
				<h3 style={{ color: theme === 'dark' ? '#fff' : '#212121' }}>{title}</h3>
				<Work>
					{projects.map(project => <Card key={project.id} {...project} svg={svg} />)}
					<More link={link} color={color}>
						<Icon as={icon} />
					</More>
				</Work>
			</Wrapper>
		)}
	</ThemeContext.Consumer>
)

export { Project }
