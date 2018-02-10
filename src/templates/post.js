import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default function Template({data}) {
    const {markdownRemark: post} = data
    return (
        <div>
            <Helmet
                title={post.frontmatter.title}
            />
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            <i>{post.frontmatter.date}</i>
            <div>
                <Link
                    to='/blog'
                >
                    Go back
                </Link>
            </div>
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
            }
        }
    }
`