import React from 'react'
import { Intro, Skills, Work, Services, Github } from 'Components/landing'
import { Layout, SEO } from 'Common'

const IndexPage = () => (
  <Layout>
    <SEO title="Hello world!" type="Organization" />
    <Intro />
    <Skills />
    <Work />
    <Services />
    <Github />
  </Layout>
)

export default IndexPage
