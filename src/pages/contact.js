import React from 'react'
import Link from 'gatsby-link'

import ContactForm from '../components/ContactForm'

const Contact = () => (
  <div
    style={{
      maxWidth: 960,
      margin: '0 auto',
      padding: '1rem'
    }}
  >
    <h4>Feel free to email me via ismai23l@hotmail.com</h4>
    <p>Or fill in the contact form and submit it!</p>
    <ContactForm />
  </div>
)

export default Contact
