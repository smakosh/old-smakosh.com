const config = require("./data/Config");

module.exports = {
  siteMetadata: {
    title: 'Smakosh | Hello world!',
    description: 'A self-taught graphic, UI/UX designer & front end developer.',
    site_url: 'https://smakosh.com',
    image_url: '',
    author: 'Ismail Ghallou',
    copyright: new Date().getFullYear(),
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
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
        name: "Couscous Bot",
        short_name: "CouscousBot",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#00c6ff",
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
    }
  ],
};
