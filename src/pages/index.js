import React from 'react'
import {
  Intro,
  Skills,
  Work,
  Services,
  Github,
  Popular,
  RecentTalks,
  Testimonials,
} from 'components/landing'
import { Layout, SEO } from 'components/common'

export default () => (
  <Layout>
    <SEO title="Hello world!" type="Organization" />
    <Intro />
    <Skills />
    <Work />
    <Services />
    <Github />
    <Popular />
    <Testimonials />
    <RecentTalks />
  </Layout>
)
