import React from 'react'
import PropTypes from 'prop-types'

import { Header ,Footer } from '../components/Includes'

import './index.scss'
import './main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
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
