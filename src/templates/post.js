import React from 'react'
import Link from 'gatsby-link'

import { Container, JsonLd } from '../components/common'

import './styles.scss'

export default function Template({ data }) {
    const {markdownRemark: post} = data
    return (
        <div>
            <Container className="article">
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
                    <div dangerouslySetInnerHTML={{__html: post.html}} />
                    <i>{post.frontmatter.date}</i>
                    <div className="back">
                        <Link
                            to='/blog'
                        >
                            Go back
                        </Link>
                    </div>
                </div>
            </Container>
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