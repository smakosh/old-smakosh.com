import React from 'react'
import Helmet from 'react-helmet'

import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Work from '../components/Work'

const IndexPage = () => (
  <div>
    <Helmet title="Smakosh | Hello world!" />
    <Intro />
    <Skills />
    <Work />
  </div>
)

export default IndexPage
