import React from 'react'
import Link from 'gatsby-link'
const config = require("../../data/Config")

import { Container, JsonLd } from '../components/common'

export default function Template({data}) {
    const {markdownRemark: post} = data
    return (
        <Container className="article">
            <JsonLd
                headline={config.description}
                datePublished={post.frontmatter.date}
            >
                {post.frontmatter.title}
            </JsonLd>
            <div style={{padding: '2rem 1rem'}}>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
                <i
                    style={{
                        color: '#212121'
                    }}
                >
                    {post.frontmatter.date}
                </i>
                <div style={{marginTop: '2rem'}}>
                    <Link
                        to='/blog'
                    >
                        Go back
                    </Link>
                </div>
            </div>
        </Container>
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
            }
        }
    }
`