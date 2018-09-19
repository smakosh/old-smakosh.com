const config = require('./data/Config')

module.exports = {
	siteMetadata: {
		site_url: config.url,
		rssMetadata: {
			site_url: config.url,
			feed_url: `${config.url}${config.siteRss}`,
			title: 'Smakosh | Hello world!',
			description: config.description,
			image_url: 'https://smakosh.com/static/favicon/logo-512.png',
			author: config.author,
			copyright: `${config.title} © ${new Date().getFullYear()}`
		}
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-netlify',
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'Roboto',
					'Merriweather'
				]
			}
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: 'https://smakosh.us17.list-manage.com/subscribe/post?u=1773a09d7c4e877cfe0ee5ee7&amp;id=9691d3de65',
			},
		},
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: 'https://smakosh.com',
			},
		},
		'gatsby-plugin-catch-links',
		{
			resolve: 'gatsby-plugin-feed',
			options: {
				setup(ref) {
					const ret = ref.query.site.siteMetadata.rssMetadata;
					ret.allMarkdownRemark = ref.query.allMarkdownRemark;
					ret.generator = 'Smakosh';
					return ret;
				},
				query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                author
                copyright
              }
            }
          }
        }
      `,
				feeds: [
					{
						serialize(ctx) {
							const { rssMetadata } = ctx.query.site.siteMetadata;
							return ctx.query.allMarkdownRemark.edges.map(edge => ({
								date: edge.node.frontmatter.date,
								title: edge.node.frontmatter.title,
								description: edge.node.excerpt,
								author: rssMetadata.author,
								custom_elements: [{ 'content:encoded': edge.node.html }]
							}));
						},
						query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
						output: config.siteRss
					}
				]
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: `${__dirname}/src/assets/img/`
			}
		},
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
			}
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false,
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Smakosh',
				short_name: 'Smakosh',
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
				icons: [
					{
						src: '/favicon/logo-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/favicon/logo-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		},
		// 'gatsby-plugin-offline' Bugged...
	],
}
