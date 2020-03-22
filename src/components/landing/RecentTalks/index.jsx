import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {
  Container,
  CardPost,
  Row,
  Subtitle,
  CustomButton,
} from 'components/common'
import { Wrapper, Center } from './styles.js'

export const RecentTalks = () => {
  const {
    talks: { edges },
  } = useStaticQuery(graphql`
    query {
      talks: allTalksYaml(sort: { order: DESC, fields: [date] }, limit: 3) {
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
            demos {
              link
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper as={Container}>
      <Subtitle>Recent tech talks</Subtitle>
      <Row alignItems="flex-start" landing>
        {edges.map(
          ({
            node: { id, title, description, thumbnail, date, slides, demos },
          }) => (
            <CardPost
              landing
              key={id}
              description={description}
              title={title}
              date={date}
              thumbnail={thumbnail}
              slides={slides}
              demos={demos}
            />
          )
        )}
      </Row>
      <Center>
        <CustomButton>
          <Link to="/talks/">Check out more</Link>
        </CustomButton>
      </Center>
    </Wrapper>
  )
}
