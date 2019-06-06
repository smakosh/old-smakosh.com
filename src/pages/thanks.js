import React from 'react'
import { Layout, SEO } from 'components/common'
import ThanksContent from 'components/contact/ThanksContent'

export default () => (
  <Layout>
    <SEO title="Thanks!" type="Organization" location="/thanks" />
    <ThanksContent />
  </Layout>
)
