import React from 'react'
import { graphql } from 'gatsby'
import { Container, Subtitle } from 'components/common'
import Behance from './Behance'
import Dribbble from './Dribbble'
import SideProjects from './SideProjects'

export const imageFields = graphql`
  fragment imageFields on ImageSharp {
    fluid(maxWidth: 960) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
`

export const Work = () => (
  <Container>
    <Subtitle>Featured work</Subtitle>
    <SideProjects />
    <Behance />
    <Dribbble />
  </Container>
)
