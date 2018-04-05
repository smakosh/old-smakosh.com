import React from 'react'
import Helmet from 'react-helmet'

import Me from '../../../../static/me.jpg'

const JsonLd = ({ children, headline, datePublished }) => {
  const structuredData = `{
    "@context": "http://schema.org",
    "@type": "Article",
    "headline": "${headline}",
    "author": "Ismail Ghallou (Smakosh)",
    "datePublished": "${datePublished ? datePublished : '1-1-2018'}"
    "image": {
      "@type": "imageObject",
      "url": "${Me}",
      "height": "600",
      "width": "800"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ismail Ghallou (Smakosh)",
      "logo": {
      "@type": "imageObject",
        "url": "http://localhost:8000/favicon/logo-48.png"
      }
    }
  }`

  return (
    <Helmet>
      <script type="application/ld+json">{structuredData}</script>
      <title>{children}</title>
    </Helmet>
  )
}

export { JsonLd }