import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Container, SEO, PageTitle } from 'components/common'
import { Details, Socials } from 'components/about'

export default () => {
  const { AboutImage } = useStaticQuery(graphql`
    query AboutImageQuery {
      AboutImage: imageSharp(fluid: { originalName: { regex: "/me.jpg/" } }) {
        ...imageFields
      }
    }
  `)
  return (
    <Layout>
      <Container>
        <SEO title="About" type="Organization" location="/about" />
        <PageTitle>About me</PageTitle>
        <Flex>
          <Details />
          <Portrait>
            <a href={AboutImage.fluid.src}>
              <Img fluid={AboutImage.fluid} alt="just me chilling" />
            </a>
            <a
              href="https://www.instagram.com/smakosh19/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more on Instagram
            </a>
          </Portrait>
        </Flex>
        <Socials />
      </Container>
    </Layout>
  )
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Portrait = styled.div`
  width: 100%;
  max-width: 48%;

  @media (max-width: 960px) {
    max-width: 100%;
  }
`
