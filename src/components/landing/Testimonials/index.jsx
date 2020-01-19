import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, PageTitle } from 'components/common'
import Testimonial from 'components/landing/Testimonials/Testimonial'
import { Wrapper, Flex, Item } from './styles'

export const Testimonials = () => {
  const { testimonials } = useStaticQuery(graphql`
    {
      testimonials: allTestimonialsYaml {
        edges {
          node {
            id
            name
            review
            title
            avatar {
              childImageSharp {
                ...imageFields
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Wrapper as={Container}>
      <PageTitle>Testimonials</PageTitle>
      <Flex>
        {testimonials.edges.map(({ node: { id, ...rest } }) => (
          <Item key={id}>
            <Testimonial {...rest} />
          </Item>
        ))}
      </Flex>
    </Wrapper>
  )
}
