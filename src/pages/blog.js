import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Layout, SmallerContainer, Head, PageTitle, CardPost } from '../components/common'


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
							excerpt(pruneLength: 250)
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
				<SmallerContainer>
					<Head type="Organization" location="/blog">
						Smakosh | Blog
					</Head>
					<PageTitle>Articles</PageTitle>
					{data.allMarkdownRemark.edges.map(post => (
						<CardPost key={post.node.id} {...post} />
					))}
				</SmallerContainer>
			</Layout>
		)}
	/>
)

export default Blog
