import React from 'react'
import styled from 'styled-components'
import { navigateTo } from 'gatsby-link'
import Img from 'gatsby-image'
import { SmallerContainer, Head } from '../components/common'


const Blog = ({ data }) => (
	<div>
		<SmallerContainer>
			<Head type="Organization" location="/blog">
        Smakosh | Blog
			</Head>
			<Title>Articles</Title>
			{data.allMarkdownRemark.edges.map(post => (
				<Post key={post.node.id} onClick={() => navigateTo(post.node.frontmatter.path)}>
					<ArticleImg>
						<Img sizes={post.node.frontmatter.thumbnail.childImageSharp.sizes} />
					</ArticleImg>
					<ArticleContent>
						<ArticleTitle>{post.node.frontmatter.title}</ArticleTitle>
						<P>{post.node.excerpt}</P>
						<I style={{ fontSize: '.8rem' }}>
							{post.node.frontmatter.date}
							<Span>{post.node.timeToRead} min</Span>
						</I>
					</ArticleContent>
				</Post>
			))}
		</SmallerContainer>
	</div>
)

const Post = styled.div`
	margin-bottom: 1.5rem;
	border-radius: .1rem;
	box-shadow: 0 0 10px 0 rgba(33, 33, 33, 0.14);
	background: #fff;
	cursor: pointer;
	transition: .7s;
	&:hover, &:focus {
		box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .2);
		transition: .7s;
	}
`

const Title = styled.h1`
	margin-bottom: 2rem
`

const ArticleContent = styled.div`
	padding: 1rem;
`

const ArticleImg = styled.div`
	height: 400px;
	overflow: hidden;
	@media (max-width: 992px) {
			height: 300px;
	}
	@media (max-width: 680px) {
			height: 250px;
	}
`

const ArticleTitle = styled.h2`
	color: #212121;
`

const P = styled.p`
	color: #616161;
`

const I = styled.i`
	color: #212121;
	font-size: .8em;
`

const Span = styled.span`
	margin-left: 10px;
`

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
