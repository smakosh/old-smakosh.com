import React from 'react'
import { Project } from 'Common'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        sideProjects: allSideprojectsYaml {
          edges {
            node {
              id
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 630) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
              link
              description
            }
          }
        }
      }
    `}
    render={({ sideProjects }) => (
      <Project title="Side Projects" projects={sideProjects} side />
    )}
  />
)
