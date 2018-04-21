import React from 'react'
import Helmet from 'react-helmet'

import { JsonLd } from '../components/common'
import ContactForm from '../components/ContactForm'

const Contact = () => (
  <React.Fragment>
    <JsonLd>
      Smakosh | Contact
    </JsonLd>
    <ContactForm />
  </React.Fragment>
)

export default Contact
