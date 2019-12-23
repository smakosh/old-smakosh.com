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
  const { talks } = useStaticQuery(graphql`
    query {
      talks: allTalksYaml(sort: { order: DESC, fields: [date] }, limit: 200) {
        edges {
          node {
            id
            title
            description: summary
            slides
            date(formatString: "MMM DD, YYYY")
            thumbnail {
              childImageSharp {
                ...imageFields
              }
            }
            watch
            demos {
              link
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Container>
        <SEO title="Talks" type="Organization" location="/talks" />
        <Row>
          <PageTitle>Recent talks</PageTitle>
          {talks.edges.map(
            ({
              node: {
                id,
                description,
                title,
                slides,
                date,
                thumbnail,
                demos,
                watch,
              },
            }) => (
              <CardPost
                key={id}
                description={description}
                title={title}
                date={date}
                thumbnail={thumbnail}
                slides={slides}
                demos={demos}
                watch={watch}
              />
            )
          )}
        </Row>
      </Container>
    </Layout>
  )
}
