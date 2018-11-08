import React from 'react'
import { Card, More, ThemeContext, Repository } from 'Common'
import { Wrapper, Work, Icon, Title } from './styles'

const Project = ({ title, projects, link, color, icon, github }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<Wrapper>
				<Title theme={theme}>{title}</Title>
				<Work github={github}>
					{!github
						? projects.map(project => <Card key={project.id} {...project} />)
						: (projects.map((project, index) => (
							<Repository key={project.node.id} id={index} {...project} />
						)))
					}
					<More link={link} color={color}>
						<Icon as={icon} />
					</More>
				</Work>
			</Wrapper>
		)}
	</ThemeContext.Consumer>
)

export { Project }
