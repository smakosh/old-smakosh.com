import React from 'react'
import Link from 'gatsby-link'

import { Container, JsonLd } from '../components/common'

const Blog = ({data}) => (
  <Container>
    <JsonLd>
      Smakosh | Blog
    </JsonLd>
    <h2
      style={{
        marginBottom: '2rem'
      }}
    >
      Articles
    </h2>
    {data.allMarkdownRemark.edges.map(post => (
      <Link 
        key={post.node.id} 
        to={post.node.frontmatter.path}
        style={{
          textDecoration: 'none'
        }}
      >  
        <div
          key={post.id}
          style={{
            padding: '2rem 1rem',
            marginBottom: '1.5rem'
          }}
          className="post"
        >
          <h3>
            {post.node.frontmatter.title}
          </h3>
          <p>
            {post.node.excerpt}
          </p>
          <i
            style={{
              fontSize: '.8rem'
            }}
          >
            {post.node.frontmatter.date}
          </i>
        </div>
      </Link>
      ))}
  </Container>
)

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }`

export default Blog