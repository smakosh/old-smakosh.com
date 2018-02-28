import React from 'react'
import Helmet from 'react-helmet'

import Details from '../components/Details'
import Socials from '../components/Socials'

import Me from '../assets/images/me.jpg'

const About = () => (
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
        <a href={Me}>
          <img src={Me} alt="just me chilling" />
        </a>
      </div>
    </div>
    <Socials />
  </div>
)

export default About
