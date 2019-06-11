module.exports = `
{
  posts: allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          type
        }
      }
    }
  }
}
`
