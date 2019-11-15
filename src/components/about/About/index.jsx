import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, PageTitle } from 'components/common'
import Details from 'components/about/Details'
import Socials from 'components/about/Socials'
import { socialLinks } from 'data/config'
import { Flex, Portrait } from './styles'

export default () => {
  const { AboutImage } = useStaticQuery(graphql`
    query AboutImageQuery {
      AboutImage: imageSharp(fluid: { originalName: { regex: "/me.jpg/" } }) {
        ...imageFields
      }
    }
  `)

  return (
    <Container>
      <PageTitle>About me</PageTitle>
      <Flex
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Details />
        <Portrait width="100%" maxWidth="48%">
          <a href={AboutImage.fluid.src}>
            <Img fluid={AboutImage.fluid} alt="just me chilling" />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            See more on Instagram
          </a>
        </Portrait>
      </Flex>
      <Socials />
    </Container>
  )
}
