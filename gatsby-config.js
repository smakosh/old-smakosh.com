const config = require("./data/Config");

module.exports = {
  siteMetadata: {
    site_url: 'https://smakosh.com',
    rssMetadata: {
      site_url: 'https://smakosh.com',
      feed_url: `https://smakosh.com/${config.siteRss}`,
      title: 'Smakosh | Hello world!',
      description: 'A self-taught graphic, UI/UX designer & front end developer.',
      image_url: 'https://smakosh.com/static/favicon/logo-512.png',
      author: config.siteRssAuthor,
      copyright: `${config.copyright.label} © ${new Date().getFullYear()}`
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.smakosh.com',
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = "Smakosh";
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
              const rssMetadata = ctx.query.site.siteMetadata.rssMetadata;
              return ctx.query.allMarkdownRemark.edges.map(edge => ({
                date: edge.node.frontmatter.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                author: rssMetadata.author,
                url: rssMetadata.site_url + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }]
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
                    fields { slug }
                    frontmatter {
                      title
                      date
                      author
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
    'gatsby-transformer-remark',
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
        showSpinner: false,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Smakosh",
        short_name: "Smakosh",
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: `/favicon/logo-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicon/logo-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
};
