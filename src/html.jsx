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
				<style
					id="gatsby-inlined-css"
					dangerouslySetInnerHTML={{ __html: inlinedStyles }}
				/>
			)
		}
		const { headComponents, body, postBodyComponents } = this.props
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<meta name="HandheldFriendly" content="True" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					{headComponents}
					<link rel="shortcut icon" href={favicon} />
					{css}
				</head>
				<body>
					<div
						id="___gatsby"
						dangerouslySetInnerHTML={{ __html: body }}
					/>
					{postBodyComponents}
				</body>
			</html>
		);
	}
}
