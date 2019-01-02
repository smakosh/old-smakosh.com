const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('src/templates/post.js')

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            timeToRead
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              edited(formatString: "MMMM DD, YYYY")
              path
              title
              next
              id
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    originalImg
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    return res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Components: `${__dirname}/src/components`,
        Common: `${__dirname}/src/components/common`,
        Static: `${__dirname}/static/`,
        Theme: `${__dirname}/src/components/theme`,
        Data: `${__dirname}/data/config`,
      },
    },
  })
}
