import React from 'react'
import { Project, DribbbleIcon } from 'components/common'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { shots } = useStaticQuery(graphql`
    query {
      shots: allDribbbleYaml {
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
