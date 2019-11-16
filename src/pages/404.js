import React from 'react'
import { Layout, SEO } from 'components/common'
import NotFound from 'components/404/NotFound'

export default () => (
  <Layout>
    <SEO
      location="/404"
      type="Organization"
      title="404"
      description="404 page not found"
    />
    <NotFound />
  </Layout>
)
