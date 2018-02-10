import React from 'react'
import Link from 'gatsby-link'

const Blog = ({data}) => (
  <div>
    <h1>Articles</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div className="blog-post-preview" key={post.id}>
          <h2>
          <Link 
            key={post.node.id} 
            to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
          </h2>
          <p>{post.node.excerpt}</p>
          <i>{post.node.frontmatter.date}</i>
        </div>
      ))}
  </div>
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