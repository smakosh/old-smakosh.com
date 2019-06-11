import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Layout,
  Container,
  SEO,
  PageTitle,
  CardPost,
  Row,
} from 'components/common'

export default () => {
  const {
    posts: { edges },
  } = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        filter: { frontmatter: { type: { ne: "legal" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 20
      ) {
        edges {
          node {
            description: excerpt(pruneLength: 260)
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
          <PageTitle>Recent articles</PageTitle>
          {edges.map(
            ({
              node: {
                id,
                description,
                timeToRead,
                frontmatter: { title, date, path, thumbnail },
              },
            }) => (
              <CardPost
                key={id}
                description={description}
                timeToRead={timeToRead}
                title={title}
                date={date}
                path={path}
                thumbnail={thumbnail}
              />
            )
          )}
        </Row>
      </Container>
    </Layout>
  )
}
