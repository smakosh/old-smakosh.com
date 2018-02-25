import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.scss'
import './main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Smakosh | Hello world!"
      meta={[
        { 
          name: 'A self-taught Graphic, UI/UX Designer & full stack developer, interested in neural networks.',
          content: 'Sample'
        },
        { 
          name: 'keywords', 
          content: 'sample, something' 
        },
      ]}
    />
    <Header />
    <div
      style={{
        width: '100%',
        paddingTop: '7rem'
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
