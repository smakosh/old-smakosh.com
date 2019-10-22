const path = require('path')
const Queries = require('./queries')
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  try {
    const postTemplate = path.resolve('./src/templates/post.js')
    const legalTemplate = path.resolve('./src/templates/legal.js')
    const tagTemplate = path.resolve('./src/templates/tag.js')

    const { data, errors } = await graphql(Queries)

    createPaginatedPages({
      edges: data.posts.edges,
      createPage,
      pageTemplate: 'src/templates/blog.js',
      pageLength: 8,
      pathPrefix: 'blog',
    })

    // Create posts pages
    data.posts.edges.forEach(({ node: { frontmatter: { path } } }) => {
      createPage({
        path: path,
        component: postTemplate,
      })
    })

    // Create legal pages
    data.legal.edges.forEach(({ node: { frontmatter: { path } } }) => {
      createPage({
        path: path,
        component: legalTemplate,
      })
    })

    // Create tags pages
    data.tags.edges.forEach(({ node: { title } }) => {
      createPage({
        path: `/${title}/`,
        component: tagTemplate,
        context: {
          slug: title,
        },
      })
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
