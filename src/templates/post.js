import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SmallerContainer, Head, Post } from 'Components/common'
import './highlight.scss'

export default function Template({ data }) {
	const { markdownRemark: post } = data
	return (
		<Layout>
			<SmallerContainer>
				<Head
					type="NewsArticle"
					headline={post.frontmatter.title}
					articleBody={post.html}
					datePublished={post.frontmatter.date}
					dateModified={post.frontmatter.edited ? post.frontmatter.edited : post.frontmatter.date}
					cover={post.frontmatter.thumbnail.childImageSharp.fluid}
					location={post.frontmatter.path}
				>
					{post.frontmatter.title}
				</Head>
				<Post {...post} />
			</SmallerContainer>
		</Layout>
	)
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
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
                        fluid(maxWidth: 700) {
							...GatsbyImageSharpFluid_tracedSVG
						}
                    }
                }
            }
        }
    }
`
