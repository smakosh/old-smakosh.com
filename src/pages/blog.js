import React from 'react'
import { navigateTo } from 'gatsby-link'
import Img from 'gatsby-image'
import { SmallerContainer, Head } from '../components/common'

const Blog = ({ data }) => (
	<div>
		<SmallerContainer>
			<Head type="Organization" location="/blog">
        Smakosh | Blog
			</Head>
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
							<h3>
								{post.node.frontmatter.title}
							</h3>
							<p>
								{post.node.excerpt}
							</p>
							<i style={{ fontSize: '.8rem' }}>
								{post.node.frontmatter.date}
								<span style={{ marginLeft: 10 }}>{post.node.timeToRead} min</span>
							</i>
						</div>
					</div>
				</div>
			))}
		</SmallerContainer>
	</div>
)

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 20
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
					timeToRead
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
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
