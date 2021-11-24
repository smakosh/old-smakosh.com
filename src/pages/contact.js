import React from 'react'
import { Layout, SEO } from 'components/common'
import ContactForm from 'components/contact/ContactForm'

const Contact = () => (
  <Layout>
    <SEO title="Contact" type="Organization" location="/contact" />
    <ContactForm />
  </Layout>
)

export default Contact
