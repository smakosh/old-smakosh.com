import React from 'react'
import { Layout, SEO } from 'components/common'
import About from 'components/about/About'

export default () => (
  <Layout>
    <SEO title="About" type="Organization" location="/about" />
    <About />
  </Layout>
)
