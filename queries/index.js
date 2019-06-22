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
  tags: allTagsYaml {
    edges {
      node {
        title
      }
    }
  }
}
`
