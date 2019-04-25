import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Container, CardPost, Row, Subtitle, CustomButton } from 'Common'
import { Wrapper, Center } from './styles.js'

export const Popular = () => {
  const {
    popular: { edges },
  } = useStaticQuery(graphql`
    query {
      popular: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { popular: { eq: true } } }
        limit: 3
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
    <Wrapper as={Container}>
      <Subtitle>Popular articles</Subtitle>
      <Row landing>
        {edges.map(post => (
          <CardPost landing key={post.node.id} {...post} />
        ))}
      </Row>
      <Center>
        <CustomButton>
          <Link to="/blog/">See more</Link>
        </CustomButton>
      </Center>
    </Wrapper>
  )
}
