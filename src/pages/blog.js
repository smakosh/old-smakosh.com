import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Layout, Container, Head, PageTitle, CardPost } from 'Common'

const Blog = () => (
	<StaticQuery
		query={graphql`
			query BlogQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					limit: 20
				) {
					edges {
						node {
							excerpt(pruneLength: 235)
							id
							timeToRead
							frontmatter {
								title
								date(formatString: "MMM DD, YYYY")
								path
								thumbnail {
									childImageSharp {
										fluid(maxWidth: 700) {
								        	...GatsbyImageSharpFluid_tracedSVG
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={data => (
			<Layout>
				<Container>
					<Head type="Organization" location="/blog">
						Smakosh | Blog
					</Head>
					<PageTitle>Articles</PageTitle>
					<Wrapper>
						{data.allMarkdownRemark.edges.map(post => (
							<CardPost key={post.node.id} {...post} />
						))}
					</Wrapper>
				</Container>
			</Layout>
		)}
	/>
)

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`

export default Blog
