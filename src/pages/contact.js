import React from 'react'
import { Layout, SEO } from 'Common'
import ContactForm from 'Components/contact/ContactForm'

export default () => (
  <Layout>
    <SEO title="Contact" type="Organization" location="/contact" />
    <ContactForm />
  </Layout>
)
