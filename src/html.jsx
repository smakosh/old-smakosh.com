import React, { Component } from 'react'
import favicon from '../static/favicon/logo-48.png'

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
	try {
		inlinedStyles = require('!raw-loader!../public/styles.css')
	} catch (e) {
		console.log(e)
	}
}

export default class HTML extends Component {
	render() {
		let css
		if (process.env.NODE_ENV === 'production') {
			css = (
				<style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: inlinedStyles }} />
			)
		}
		const {
			headComponents,
			body,
			postBodyComponents,
			preBodyComponents,
			bodyAttributes,
			htmlAttributes } = this.props
		return (
			<html lang="en" {...htmlAttributes}>
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta name="HandheldFriendly" content="True" />
					{headComponents}
					<link rel="shortcut icon" href={favicon} />
					{css}
				</head>
				<body {...bodyAttributes}>
					<noscript>You need to enable JavaScript to run this app!</noscript>
					{preBodyComponents}
					<div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
					{postBodyComponents}
				</body>
			</html>
		);
	}
}
