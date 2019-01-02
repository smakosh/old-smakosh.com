import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Layout, Container, SEO, PageTitle, CardPost } from 'Common'

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
							excerpt(pruneLength: 230)
							id
							timeToRead
							frontmatter {
								title
								date(formatString: "MMM DD, YYYY")
								path
								thumbnail {
									childImageSharp {
										...imageFields
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
					<SEO title="Blog" type="Organization" location="/blog" />
					<PageTitle>Articles</PageTitle>
					<Row>
						{data.allMarkdownRemark.edges.map(post => (
							<CardPost key={post.node.id} {...post} />
						))}
					</Row>
				</Container>
			</Layout>
		)}
	/>
)

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	&:after {
		content: '';
		max-width: 32%;
		width: 100%;

		@media (max-width: 960px) {
			content: unset;
		}
	}
`

export default Blog
