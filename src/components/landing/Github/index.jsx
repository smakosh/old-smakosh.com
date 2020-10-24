import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Project, GithubIcon, Container, Subtitle } from 'components/common'

export const Github = () => {
  const { github } = useStaticQuery(
    graphql`
      query {
        github {
          viewer {
            repositories(
              first: 7
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      <Subtitle>Open Source</Subtitle>
      <Project
        icon={GithubIcon}
        type="Github"
        projects={github.viewer.repositories.edges}
        link="https://github.com/smakosh"
        color="#000"
        github
      />
    </Container>
  )
}
