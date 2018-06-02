import React from 'react'
import Helmet from 'react-helmet'
import Me from '../../../../static/me.jpg'

const JsonLd = ({ children, type, headline, datePublished, cover }) => {

  let structuredDataArticle = `{
    "@context": "http://schema.org",
    "@type": "${type}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://google.com/article"
    },
    "headline": "${headline ? headline : 'A self-taught Graphic, UI/UX Designer and full stack developer.'}",
    "image": {
      "@type": "imageObject",
      "url": "${cover ? `https://smakosh.com${cover}` : `https://smakosh.com${Me}`}",
      "height": "600",
      "width": "800"
    },
    "datePublished": "${datePublished ? datePublished : '1-1-2018'}",
    "dateModified": "${datePublished ? datePublished : '1-1-2018'}",
    "author": {
      "@type": "Person",
      "name": "Ismail Ghallou (Smakosh)"
    },
     "publisher": {
      "@type": "Organization",
      "name": "Ismail Ghallou (Smakosh)",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smakosh.com/favicon/logo-48.png"
      }
    },
    "description": "${headline ? headline : 'A self-taught Graphic, UI/UX Designer and full stack developer.'}"
  }`

  let structuredDataOrganization = `{ 
    "@context" : "http://schema.org",
    "@type" : "${type}",
    "legalName" : "Ismail Ghallou",
    "url" : "https://smakosh.com/",
    "logo" : "https://smakosh.com/favicon/logo-48.png",
    "contactPoint" : [{
      "@type" : "ContactPoint",
      "telephone" : "+212-663-53-27-61",
      "contactType" : "customer service"
    }],
    "sameAs" : [ "http://www.facebook.com/ismailghallou",
      "http://www.twitter.com/smakosh",
      "https://plus.google.com/u/0/+IsmailSmakoshGhallou",
      "https://www.youtube.com/user/smakoshthegamer",
      "https://www.linkedin.com/in/ismail-ghallou-630149122"]
  }`

  return (
    <Helmet>
      <script type="application/ld+json">{type === 'NewsArticle' ? structuredDataArticle : structuredDataOrganization}</script>
      <title>{ children }</title>
    </Helmet>
  )
}

export { JsonLd }
