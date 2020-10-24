import React, { useContext } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Container } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import Skill from './Skill'
import { Wrapper, Tech, Flex } from './styles'

export const Skills = () => {
  const { theme } = useContext(ThemeContext)
  const {
    skills: { edges },
  } = useStaticQuery(graphql`
    query {
      skills: allSkillsYaml {
        edges {
          node {
            id
            title
            icon
          }
        }
      }
    }
  `)
  return (
    <Wrapper theme={theme}>
      <Container>
        <h2>Skills</h2>
        <Flex>
          {edges.map(({ node }) => (
            <Skill key={node.id} {...node} />
          ))}
        </Flex>
        <Tech theme={theme}>
          <Link to="/the-tech-tools-I-use">See the tech tools I use</Link>
        </Tech>
      </Container>
    </Wrapper>
  )
}
