import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import ContactForm from '../components/ContactForm'

const Contact = () => (
  <div
    style={{
      maxWidth: 960,
      margin: '0 auto',
      padding: '1rem'
    }}
  >
    <Helmet title="Smakosh | Contact" />
    <h4>Feel free to email me via <a href="mailto:ismai23l@hotmail.com" target="_top">ismai23l@hotmail.com</a></h4>
    <p>Or fill in the contact form and submit it!</p>
    <ContactForm />
  </div>
)

export default Contact
