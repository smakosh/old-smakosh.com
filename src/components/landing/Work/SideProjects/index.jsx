import React from 'react'
import { Project } from 'components/common'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { sideProjects } = useStaticQuery(graphql`{
  sideProjects: allSideprojectsYaml {
    edges {
      node {
        id
        title
        image {
          childImageSharp {
            gatsbyImageData(width: 630, placeholder: TRACED_SVG, layout: CONSTRAINED)
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
