import React, {Component} from 'react'
import config from '../data/Config'
import favicon from '../static/favicon/logo-48.png'
import me from '../static/me.jpg'

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

          <meta name="description" content={config.description} />
          <meta name="image" content={me} />

          <meta property="og:url" content={config.url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={config.copyright.label} />
          <meta property="og:description" content={config.description} />
          <meta property="og:image" content={me} />
          <meta property="fb:app_id" content={config.social.facebook} />

          <meta name="twitter:card" content={config.description} />
          <meta
            name="twitter:creator"
            content={config.social.twitter}
          />
          <meta name="twitter:title" content={config.copyright.label} />
          <meta name="twitter:description" content={config.description} />
          <meta name="twitter:image" content={me} />

          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
