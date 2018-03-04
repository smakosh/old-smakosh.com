import React, {Component} from 'react'
import favicon from '../static/favicon/logo-48.png'
import me from '../static/me.png'

export default class HTML extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === "production") {
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

          <meta name="description" content="A self-taught Graphic, UI/UX Designer and full stack developer, interested in neural networks." />
          <meta name="image" content={me} />

          <meta property="og:url" content="https://smakosh.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Smakosh" />
          <meta property="og:description" content="A self-taught Graphic, UI/UX Designer and full stack developer, interested in neural networks." />
          <meta property="og:image" content={me} />
          <meta
            property="fb:app_id"
            content="165244147328608"
          />

          <meta name="twitter:card" content="Looking for a front end developer? or someone to help you make a website or web app? Get in touch with me" />
          <meta
            name="twitter:creator"
            content="https://twitter.com/smakosh"
          />
          <meta name="twitter:title" content="Smakosh" />
          <meta name="twitter:description" content="A self-taught Designer and Full stack developer" />
          <meta name="twitter:image" content={me} />

          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i"
          />

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