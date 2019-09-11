import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Container,
  SEO,
  PageTitle,
  CardPost,
  Row,
} from 'components/common'

export default ({ data: { tag, posts } }) => (
  <Layout>
    <Container>
      <SEO type="Organization" title={tag.title} location={`/${tag.title}`} />
      <Row>
        <PageTitle>Articles related to {tag.title}</PageTitle>
        {posts.edges.map(
          ({
            node: {
              id,
              description,
              timeToRead,
              frontmatter: { title, date, path, thumbnail, tags },
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
              tags={tags}
            />
          )
        )}
      </Row>
    </Container>
  </Layout>
)

export const postQuery = graphql`
  query($slug: String!) {
    tag: tagsYaml(title: { eq: $slug }) {
      title
    }
    posts: allMarkdownRemark(
      filter: { frontmatter: { type: { ne: "legal" }, tags: { in: [$slug] } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 200
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
            tags
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
`
