import React from 'react'
import Helmet from 'react-helmet'
import Me from '../../../../static/me.jpg'
import config from '../../../../data/Config'

const Head = ({ children, type, headline, articleBody, datePublished, dateModified, cover, location = '' }) => {
	const structuredDataArticle = `{
		"@context": "http://schema.org",
		"@type": "${type}",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": "https://google.com/article"
		},
		"headline": "${headline}",
		"image": {
			"@type": "imageObject",
			"url": "${cover ? `https://smakosh.com${cover}` : `https://smakosh.com${Me}`}",
			"height": "600",
			"width": "800"
		},
		"datePublished": "${datePublished}",
		"dateModified": "${dateModified}",
		"author": {
			"@type": "Person",
			"name": "Ismail Ghallou 'Smakosh'"
		},
		"articleBody": "${articleBody}",
		"publisher": {
			"@type": "Organization",
			"name": "Ismail Ghallou (Smakosh)",
			"logo": {
				"@type": "ImageObject",
				"url": "https://smakosh.com/favicon/logo-48.png"
			}
		},
		"description": "${headline}",
		"url": "${config.url}${location}/?ref=smakosh.com"
	}`

	const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "${type}",
		"legalName": "Ismail Ghallou",
		"url": "https://smakosh.com/",
		"logo": "https://smakosh.com/favicon/logo-48.png",
		"foundingDate": "2016",
		"founders": [{
			"@type": "Person",
			"name": "Ismail Ghallou"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "ismai23l@hotmail.com",
			"telephone": "+212-663-53-27-61",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Errachidia",
			"addressRegion": "Drâa-Tafilalet",
			"addressCountry": "Morocco",
			"postalCode": "52000"
		},
		"sameAs": [ 
			"http://www.facebook.com/ismailghallou",
			"http://www.twitter.com/smakosh",
			"https://plus.google.com/u/0/+IsmailSmakoshGhallou",
			"https://www.youtube.com/user/smakoshthegamer",
			"https://www.linkedin.com/in/ismail-ghallou-630149122",
			"https://www.twitter.com/smakosh",
			"https://instagram.com/smakosh19",
			"https://github.com/smakosh"
		]
  	}`

	return (
		<Helmet>
			<meta name="description" content={type === 'NewsArticle' ? headline : config.description} />
			<meta name="image" content={cover ? `https://smakosh.com${cover}` : `https://smakosh.com${Me}`} />

			<meta property="og:url" content={`${config.url}${location}/?ref=smakosh.com`} />
			<meta property="og:type" content={type === 'NewsArticle' ? 'NewsArticle' : 'website'} />
			<meta property="og:title" content={type === 'NewsArticle' ? headline : config.copyright.label} />
			<meta property="og:description" content={type === 'NewsArticle' ? headline : config.description} />
			<meta property="og:image" content={cover ? `https://smakosh.com${cover}` : `https://smakosh.com${Me}`} />
			<meta property="fb:app_id" content={config.social.facebook} />

			<meta name="twitter:card" content={cover ? `https://smakosh.com${cover}` : `https://smakosh.com${Me}`} />
			<meta name="twitter:creator" content={config.social.twitter} />
			<meta name="twitter:site" content="@smakosh" />
			<meta name="twitter:title" content={type === 'NewsArticle' ? headline : config.copyright.label} />
			<meta name="twitter:description" content={type === 'NewsArticle' ? headline : config.description} />
			<meta name="twitter:image:src" content={cover ? `https://smakosh.com${cover}` : `https://smakosh.com${Me}`} />
			<script type="application/ld+json">{type === 'NewsArticle' ? structuredDataArticle : structuredDataOrganization}</script>
			<title>{ children }</title>
		</Helmet>
	)
}

export { Head }
