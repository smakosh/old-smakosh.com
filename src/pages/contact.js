import React from 'react'
import Helmet from 'react-helmet'

import { JsonLd } from '../components/common'
import { ContactForm } from '../components/ContactPage'

const Contact = () => (
  <React.Fragment>
    <JsonLd
      type="Organization"
    >
      Smakosh | Contact
    </JsonLd>
    <ContactForm />
  </React.Fragment>
)

export default Contact
