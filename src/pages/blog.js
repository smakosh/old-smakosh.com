import React from 'react'
import {navigateTo} from 'gatsby-link'
import Img from 'gatsby-image'

import { JsonLd } from '../components/common'

const Blog = ({data}) => {
  console.log(data)
  console.log(data.allMarkdownRemark.edges)
  return (
  <div className="small-container">
    <JsonLd>Smakosh | Blog</JsonLd>
    <h2 style={{ marginBottom: '2rem' }}>
      Articles
    </h2>
    {data.allMarkdownRemark.edges.map(post => ( 
      <div key={post.node.id} onClick={() => navigateTo(post.node.frontmatter.path)} className="post">
        <div className="article-image">
          <Img sizes={post.node.frontmatter.thumbnail.childImageSharp.sizes} />
        </div>
        <div className="article-details">
          <div className="article-content">
            <h3>{post.node.frontmatter.title}</h3>
            <p>{post.node.excerpt}</p>
            <i style={{ fontSize: '.8rem' }}>
              {post.node.frontmatter.date}
            </i>
          </div>
        </div>
      </div>
    ))}
  </div>
)
}

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
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 630 ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }`

export default Blog