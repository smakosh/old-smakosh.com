import React from 'react'
import { Layout, SEO } from 'Common'
import ThanksContent from 'Components/contact/ThanksContent'

export default () => (
  <Layout>
    <SEO title="Thanks!" type="Organization" location="/thanks" />
    <ThanksContent />
  </Layout>
)
