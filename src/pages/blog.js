import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Layout, Container, SEO, PageTitle, CardPost, Row } from 'Common'

export default () => {
  const {
    posts: { edges },
  } = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 20
      ) {
        edges {
          node {
            excerpt(pruneLength: 230)
            id
            timeToRead
            frontmatter {
              title
              date(formatString: "MMM DD, YYYY")
              path
              thumbnail {
                childImageSharp {
                  ...imageFields
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Container>
        <SEO title="Blog" type="Organization" location="/blog" />
        <Row>
          <PageTitle>Articles</PageTitle>
          {edges.map(post => (
            <CardPost key={post.node.id} {...post} />
          ))}
        </Row>
      </Container>
    </Layout>
  )
}
