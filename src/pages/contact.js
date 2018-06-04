import React from 'react'
import Helmet from 'react-helmet'
import { Head } from '../components/common'
import { ContactForm } from '../components/ContactPage'

const Contact = () =>
  <React.Fragment>
    <Head type="Organization" location="/contact">
      Smakosh | Contact
    </Head>
    <ContactForm />
  </React.Fragment>

export default Contact
