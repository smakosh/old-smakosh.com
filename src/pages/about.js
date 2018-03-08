import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Details from '../components/Details'
import Socials from '../components/Socials'

const About = ({data}) => (
  <div
    style={{
      maxWidth: 960,
      margin: '0 auto',
      padding: '1rem'
    }}
  >
    <Helmet title="Smakosh | About" />
    <h2>
      About me
    </h2>
    <div className="about">
      <Details />
      <div className="me">
        <a href={data.AboutImage.sizes.src}>
          <Img sizes={data.AboutImage.sizes} alt="just me chilling" />
        </a>
      </div>
    </div>
    <Socials />
  </div>
)

export const pageQuery = graphql`
  query AboutImageQuery {
    AboutImage: imageSharp(id: { regex: "/me.jpg/" }) {
      sizes(maxWidth: 630 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default About
