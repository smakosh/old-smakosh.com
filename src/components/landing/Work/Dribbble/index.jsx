import React from 'react'
import { Project, DribbbleIcon } from 'components/common'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { shots } = useStaticQuery(graphql`
    {
      shots: allDribbbleYaml {
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
      icon={DribbbleIcon}
      title="Shared on Dribbble"
      projects={shots}
      link="https://dribbble.com/smakosh"
      color="#ea4c89"
    />
  )
}
