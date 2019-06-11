import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SmallerContainer, SEO } from 'components/common'
// import './highlight.scss'

export default ({ data: { legal } }) => (
  <Layout>
    <SmallerContainer>
      <SEO
        title={legal.frontmatter.title}
        type="Organization"
        location={legal.frontmatter.path}
      />
      <div dangerouslySetInnerHTML={{ __html: legal.html }} />
    </SmallerContainer>
  </Layout>
)

export const legalQuery = graphql`
  query($path: String!) {
    legal: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
