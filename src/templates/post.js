import React from 'react'
import Link from 'gatsby-link'
import Disqus from 'disqus-react'
import { SmallerContainer, Head, SocialShare } from '../components/common'
import './styles.scss'
import './highlight.scss'

export default function Template({ data }) {
	const { markdownRemark: post } = data
	const disqusShortName = 'https-smakosh-com'
	const disqusConfig = {
		url: `https://smakosh.com${post.frontmatter.path}`,
		identifier: post.frontmatter.id,
		title: post.frontmatter.title
	}
	return (
		<div>
			<SmallerContainer className="article">
				<Head
					type="NewsArticle"
					headline={post.frontmatter.title}
					articleBody={post.html}
					datePublished={post.frontmatter.date}
					dateModified={post.frontmatter.edited ? post.frontmatter.edited : post.frontmatter.date}
					cover={post.frontmatter.thumbnail.childImageSharp.sizes.src}
					location={post.frontmatter.path}
				>
					{post.frontmatter.title}
				</Head>
				<div className="article-card">
					<h1>{post.frontmatter.title}</h1>
					<div className="article-date">
						<i>{post.timeToRead} min read</i>
						<i>Published on: {post.frontmatter.date}</i>
						{post.frontmatter.edited && <i>Modified on: {post.frontmatter.edited}</i>}
					</div>
					<div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
					<SocialShare {...post.frontmatter} />
					<div className="back">
						<Link to={post.frontmatter.next}>
                            Previous article
						</Link>
					</div>
					<div style={{ marginTop: '2rem' }}>
						<Disqus.CommentCount shortname={disqusShortName} config={disqusConfig}>
							Comments
						</Disqus.CommentCount>
						<Disqus.DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
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
                        sizes(maxWidth: 630 ) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
            }
        }
    }
`
