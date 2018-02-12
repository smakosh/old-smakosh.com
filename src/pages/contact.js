import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <div
    style={{
      maxWidth: 960,
      margin: '0 auto'
    }}
  >
    <h1>Hi from the contact page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Contact
