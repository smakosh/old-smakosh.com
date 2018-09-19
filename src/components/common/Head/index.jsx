import React from 'react'
import Helmet from 'react-helmet'
import Me from '../../../../static/me.jpg'
import {
	url,
	description,
	social,
	title,
	socialLinks,
	address,
	contact,
	legalName,
	foundingDate,
	logo,
	author
} from '../../../../data/Config'

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
			"name": "${author}"
		},
		"articleBody": "${articleBody}",
		"publisher": {
			"@type": "Organization",
			"name": "${author}",
			"logo": {
				"@type": "ImageObject",
				"url": "${logo}"
			}
		},
		"description": "${headline}",
		"url": "${url}${location}/?ref=smakosh.com"
	}`

	const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "${type}",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.google}",
			"${socialLinks.youtube}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
  	}`

	return (
		<Helmet>
			<meta name="description" content={type === 'NewsArticle' ? headline : description} />
			<meta name="image" content={cover ? `${url}${cover}` : `${url}${Me}`} />

			<meta property="og:url" content={`${url}${location}/?ref=smakosh.com`} />
			<meta property="og:type" content={type === 'NewsArticle' ? 'NewsArticle' : 'website'} />
			<meta property="og:title" content={type === 'NewsArticle' ? headline : title} />
			<meta property="og:description" content={type === 'NewsArticle' ? headline : description} />
			<meta property="og:image" content={cover ? `${url}${cover}` : `${url}${Me}`} />
			<meta property="fb:app_id" content={social.facebook} />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content={social.twitter} />
			<meta name="twitter:site" content="@smakosh" />
			<meta name="twitter:title" content={type === 'NewsArticle' ? headline : title} />
			<meta name="twitter:description" content={type === 'NewsArticle' ? headline : description} />
			<meta name="twitter:image:src" content={cover ? `${url}${cover}` : `${url}${Me}`} />
			<script type="application/ld+json">{type === 'NewsArticle' ? structuredDataArticle : structuredDataOrganization}</script>
			<link rel="publisher" href="https://plus.google.com/u/0/b/107741951374775538155/+IsmailSmakoshGhallou" />
			<title>{ children }</title>
		</Helmet>
	)
}

export { Head }
