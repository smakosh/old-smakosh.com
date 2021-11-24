import React from 'react'
import { Project } from 'components/common'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { sideProjects } = useStaticQuery(graphql`
    {
      sideProjects: allSideprojectsYaml {
        edges {
          node {
            id
            title
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
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
