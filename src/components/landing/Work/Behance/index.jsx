import React from 'react'
import { BehanceIcon, Project } from 'components/common'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { projects } = useStaticQuery(graphql`
    {
      projects: allBehanceYaml {
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
  return (
    <Project
      icon={BehanceIcon}
      title="Shared on Behance"
      projects={projects}
      link="https://www.behance.net/ismail16sm9991"
      color="rgb(0, 119, 255)"
    />
  )
}
