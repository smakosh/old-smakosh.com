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
  ],
};
