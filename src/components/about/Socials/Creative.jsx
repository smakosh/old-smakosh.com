import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Grid } from './styles'
import SocialIcon from './SocialIcon'

export default ({ theme }) => {
  const { social } = useStaticQuery(graphql`
    query {
      social: allSocialYaml(filter: { creative: { eq: true } }) {
        edges {
          node {
            id
            name
            darkIcon {
              publicURL
            }
            lightIcon {
              publicURL
            }
            link
          }
        }
      }
    }
  `)
  return (
    <Grid>
      {social.edges.map(({ node }) => (
        <SocialIcon theme={theme} key={node.id} {...node} />
      ))}
    </Grid>
  )
}
