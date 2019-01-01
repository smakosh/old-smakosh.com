import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SmallerContainer, SEO, Post } from 'Common'
import './highlight.scss'

const Template = ({ data: { post } }) => (
  <Layout>
    <SmallerContainer>
      <SEO
        type="NewsArticle"
        title={post.frontmatter.title}
        articleBody={post.html}
        datePublished={post.frontmatter.date}
        dateModified={
          post.frontmatter.edited
            ? post.frontmatter.edited
            : post.frontmatter.date
        }
        cover={post.frontmatter.thumbnail.childImageSharp.fluid.originalImg}
        location={post.frontmatter.path}
      />
      <Post {...post} />
    </SmallerContainer>
  </Layout>
)

export const postQuery = graphql`
  query($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        edited(formatString: "MMMM DD, YYYY")
        path
        title
        next
        id
        thumbnail {
          childImageSharp {
            ...imageFields
          }
        }
      }
    }
  }
`

export default Template
