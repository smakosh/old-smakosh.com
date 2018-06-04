import React from 'react'
import { Head } from '../components/common'

const NotFoundPage = () => (
  <div>
    <Head type="Organization">Smakosh | 404</Head>
    <div
      style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '1rem'
      }}
    >
      <h1>404 PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </div>
)

export default NotFoundPage
