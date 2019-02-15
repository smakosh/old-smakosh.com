const path = require('path')
const Queries = require('./queries')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  try {
    const postTemplate = path.resolve('src/templates/post.js')

    const res = await graphql(Queries)
    res.data.posts.edges.forEach(({ node: { frontmatter: { path } } }) => {
      createPage({
        path: path,
        component: postTemplate,
      })
    })

    if (res.errors) {
      throw new Error(res.errors)
    }
  } catch (err) {
    console.log(err)
  }
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
