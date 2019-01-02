import React from 'react'
import { graphql } from 'gatsby'
import { Container, Subtitle } from 'Common'
import Behance from './Behance'
import Dribbble from './Dribbble'
import SideProjects from './SideProjects'

export const imageFields = graphql`
  fragment imageFields on ImageSharp {
    fluid(maxWidth: 630) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
`

export const Work = () => (
  <Container>
    <Subtitle>Work</Subtitle>
    <SideProjects />
    <Behance />
    <Dribbble />
  </Container>
)
