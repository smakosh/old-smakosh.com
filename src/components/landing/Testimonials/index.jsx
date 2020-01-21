import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import { Container, PageTitle } from 'components/common'
import Testimonial from 'components/landing/Testimonials/Testimonial'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Wrapper, Item } from './styles'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
}

export const Testimonials = () => {
  const { theme } = useContext(ThemeContext)
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
    <Wrapper as={Container} theme={theme}>
      <PageTitle>Testimonials</PageTitle>
      <Slider {...settings}>
        {testimonials.edges.map(({ node: { id, ...rest } }) => (
          <Item key={id}>
            <Testimonial {...rest} />
          </Item>
        ))}
      </Slider>
    </Wrapper>
  )
}
