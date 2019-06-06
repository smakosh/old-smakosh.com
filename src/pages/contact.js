import React from 'react'
import { Layout, SEO } from 'components/common'
import ContactForm from 'components/contact/ContactForm'

export default () => (
  <Layout>
    <SEO title="Contact" type="Organization" location="/contact" />
    <ContactForm />
  </Layout>
)
