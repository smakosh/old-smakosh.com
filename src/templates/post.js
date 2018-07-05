import React from 'react'
import Link from 'gatsby-link'
import { SmallerContainer, Head, SocialShare } from '../components/common'
import './styles.scss'
import './highlight.scss'

export default function Template({ data }) {
	const { markdownRemark: post } = data
	return (
		<div>
			<SmallerContainer className="article">
				<Head
					type="NewsArticle"
					headline={post.frontmatter.title}
					datePublished={post.frontmatter.date}
					cover={post.frontmatter.thumbnail.childImageSharp.sizes.src}
					location={post.frontmatter.path}
				>
					{post.frontmatter.title}
				</Head>
				<div className="article-card">
					<h1>
						{post.frontmatter.title}
					</h1>
					<div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
					<SocialShare {...post.frontmatter} />
					<i>
						{post.frontmatter.date}
					</i>
					<div className="back">
						<Link to={post.frontmatter.next}>
                            Previous article
						</Link>
					</div>
				</div>
			</SmallerContainer>
		</div>
	)
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                next
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
`
