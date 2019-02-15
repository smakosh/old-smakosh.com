module.exports = `
{
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
  ) {
    edges {
      node {
        frontmatter {
          path
        }
      }
    }
  }
}
`
