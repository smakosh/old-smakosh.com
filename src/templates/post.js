import React from 'react'
import { Link, graphql } from 'gatsby'
import Disqus from 'disqus-react'
import styled from 'styled-components'
import { Layout, SmallerContainer, Head, SocialShare } from '../components/common'
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
				<ArticleWrapper>
					<h1>{post.frontmatter.title}</h1>
					<ArticleDate>
						<i>{post.frontmatter.date} -</i>
						<i>{post.timeToRead} min read</i>
					</ArticleDate>
					<Content dangerouslySetInnerHTML={{ __html: post.html }} />
					<SocialShare {...post.frontmatter} />
					<Back>
						<Link to={post.frontmatter.next}>Previous article</Link>
					</Back>
					<Comments>
						<Disqus.DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
					</Comments>
				</ArticleWrapper>
			</SmallerContainer>
		</Layout>
	)
}

const ArticleWrapper = styled.div`
	padding: 2rem 1rem;
	a {
		text-decoration: none;
		color: rgb(0, 119, 255);
	}
	i {
		color: #a7a7a7;
	}
	h1 {
		font-family: 'Merriweather', serif;
		text-align: center;
	}
`

const Back = styled.div`
	margin-top: 2rem;
`

const Content = styled.div`
	font-size: 1.2rem;
	line-height: 2rem;
`

const Comments = styled.div`
	marginTop: '2rem';
`

const ArticleDate = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	margin-top: -1rem;
	margin-bottom: 1rem;
	i {
		font-size: .9em;
		&:first-child {
			margin-right: .2rem;
		}
	}
`

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
