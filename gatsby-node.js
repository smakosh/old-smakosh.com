const path = require('path')
const Queries = require('./queries')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  try {
    const postTemplate = path.resolve('src/templates/post.js')
    const legalTemplate = path.resolve('src/templates/legal.js')

    const { data, errors } = await graphql(Queries)
    data.posts.edges.forEach(({ node: { frontmatter: { path, type } } }) => {
      if (type === 'legal') {
        createPage({
          path: path,
          component: legalTemplate,
        })
      } else {
        createPage({
          path: path,
          component: postTemplate,
        })
      }
    })

    if (errors) {
      throw new Error(errors)
    }
  } catch (err) {
    console.log(err)
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
