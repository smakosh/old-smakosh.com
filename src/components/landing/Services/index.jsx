import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import Service from './Service'
import { Wrapper, Grid } from './styles'

export const Services = () => {
  const { theme } = useContext(ThemeContext)
  const {
    services: { edges },
  } = useStaticQuery(graphql`
    query {
      services: allServicesYaml {
        edges {
          node {
            id
            title
            icon
            description
          }
        }
      }
    }
  `)
  return (
    <Wrapper theme={theme}>
      <Container>
        <h2>Services</h2>
        <Grid>
          {edges.map(({ node }) => (
            <Service theme={theme} key={node.id} {...node} />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  )
}
