import React from 'react'
import Footer from '../components/Includes/Footer'
import Header from '../components/Includes/Header'

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

export default TemplateWrapper
