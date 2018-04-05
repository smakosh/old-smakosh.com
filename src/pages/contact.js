import React from 'react'
const config = require("../../data/Config")
import Helmet from 'react-helmet'

import { Container, JsonLd } from '../components/common'
import ContactForm from '../components/ContactForm'

const Contact = () => (
  <Container>
    <JsonLd
        headline={config.description}
    >
      Smakosh | Contact
    </JsonLd>
    <h4>Feel free to email me via <a href="mailto:ismai23l@hotmail.com" target="_top">ismai23l@hotmail.com</a></h4>
    <p>Or fill in the contact form and submit it!</p>
    <ContactForm />
  </Container>
)

export default Contact
