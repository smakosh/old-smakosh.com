import React from 'react'
import { Card, More, ThemeContext, Repository } from 'Common'
import { Wrapper, Work, Icon, Title } from './styles'

export const Project = ({
  title,
  projects,
  link,
  side,
  color,
  icon,
  github,
}) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper>
        <Title theme={theme}>{title}</Title>
        <Work github={github} side={side}>
          {!github
            ? projects.edges.map(({ node }) => <Card key={node.id} {...node} />)
            : projects.map((project, index) => (
                <Repository key={project.node.id} id={index} {...project} />
              ))}
          {!side && (
            <More link={link} color={color}>
              <Icon as={icon} />
            </More>
          )}
        </Work>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
)
