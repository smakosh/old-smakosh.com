import React from 'react'
import { Project } from 'Common'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { sideProjects } = useStaticQuery(graphql`
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
  `)
  return <Project title="Side Projects" projects={sideProjects} side />
}
