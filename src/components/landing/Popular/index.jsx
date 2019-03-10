import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Container, CardPost, Row, Subtitle, CustomButton } from 'Common'
import { Wrapper, Center } from './styles.js'

export const Popular = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({ popular: { edges } }) => (
      <Wrapper as={Container}>
        <Subtitle>Popular articles</Subtitle>
        <Row>
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
    )}
  />
)
