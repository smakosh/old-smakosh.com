const config = require('./src/data/config')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://smakosh.com',
    rssMetadata: {
      site_url: 'https://smakosh.com',
      feed_url: `${config.url}${config.siteRss}`,
      title: 'Smakosh | Blog',
      description: config.defaultDescription,
      image_url: 'https://smakosh.com/static/favicon/logo-512.png',
      author: config.author,
      copyright: `${config.defaultTitle} © ${new Date().getFullYear()}`,
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MC_ENDPOINT,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.url,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `{
					site {
						siteMetadata {
							rssMetadata {
								site_url
								title
								author
								copyright
								description
							}
						}
					}
				}`,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url:
                    site.siteMetadata.rssMetadata.site_url +
                    edge.node.frontmatter.path,
                  guid:
                    site.siteMetadata.rssMetadata.site_url +
                    edge.node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `{
							allMarkdownRemark(
                filter: { frontmatter: { type: { ne: "legal" } } },
								sort: { order: DESC, fields: [frontmatter___date] }
							) {
								edges {
									node {
										excerpt
										html
										frontmatter {
											title
											path
											date
										}
									}
								}
							}
						}`,
            output: config.siteRss,
            title: 'Smakosh | Blog',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1080,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.defaultTitle,
        short_name: config.defaultTitle,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: './static/favicon/logo-512x512.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
