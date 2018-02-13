import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default function Template({data}) {
    const {markdownRemark: post} = data
    return (
        <div 
            className="article"
            style={{
                maxWidth: 960,
                margin: '0 auto'
            }}
        >
            <Helmet
                title={post.frontmatter.title}
            />
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