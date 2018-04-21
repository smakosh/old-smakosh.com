import React from 'react'
import Helmet from 'react-helmet'

import Me from '../../../../static/me.jpg'

const JsonLd = ({ children, headline, datePublished, cover }) => {
  const structuredData = `{
    "@context": "http://schema.org",
    "@type": "Article",
    "headline": "${headline ? headline : 'A self-taught Graphic, UI/UX Designer and full stack developer.'}",
    "author": "Ismail Ghallou (Smakosh)",
    "datePublished": "${datePublished ? datePublished : '1-1-2018'}",
    "image": {
      "@type": "imageObject",
      "url": "${cover ? cover : `https://smakosh.com/${Me}`}",
      "height": "600",
      "width": "800"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ismail Ghallou (Smakosh)",
      "logo": {
      "@type": "imageObject",
        "url": "https://smakosh.com/favicon/logo-48.png"
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