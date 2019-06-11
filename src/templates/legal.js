import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SmallerContainer, SEO } from 'components/common'
import Privacy from 'components/legal/Privacy'

export default ({ data: { legal } }) => (
  <Layout>
    <SmallerContainer>
      <SEO
        title={legal.frontmatter.title}
        type="Organization"
        location={legal.frontmatter.path}
      />
      <Privacy content={legal.html} />
    </SmallerContainer>
  </Layout>
)

export const legalQuery = graphql`
  query($path: String!) {
    legal: markdownRemark(
      frontmatter: { path: { eq: $path }, type: { eq: "legal" } }
    ) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
