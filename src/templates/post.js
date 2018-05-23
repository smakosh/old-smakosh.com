import React from 'react'
import Link from 'gatsby-link'

import { SmallerContainer, JsonLd } from '../components/common'

import './styles.scss'

export default function Template({ data }) {
    const {markdownRemark: post} = data
    return (
        <div>
            <SmallerContainer className="article">
                <JsonLd
                    type="NewsArticle"
                    headline={post.frontmatter.title}
                    datePublished={post.frontmatter.date}
                    cover={post.frontmatter.thumbnail.childImageSharp.sizes.src}
                >
                    {post.frontmatter.title}
                </JsonLd>
                <div className="article-card">
                    <h1>{post.frontmatter.title}</h1>
                    <div className="post-content" dangerouslySetInnerHTML={{__html: post.html}} />
                    <i>{post.frontmatter.date}</i>
                    {post.frontmatter.next ? (
                        <div className="back">
                            <Link
                                to={post.frontmatter.next}
                            >
                                Read next Article
                            </Link>
                        </div>
                    ) : (
                        <div className="back">
                            <Link
                                to='/blog'
                            >
                                Go Back
                            </Link>
                        </div>
                    )}
                </div>
            </SmallerContainer>
        </div>
    )
}

export const postQuery = graphql `
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