import React from 'react'
import { Link } from 'gatsby'
import {
  Layout,
  Container,
  SEO,
  PageTitle,
  CardPost,
  Row,
} from 'components/common'

const NavLink = ({ test, text, url }) => {
  if (!test) {
    return <Link to={url}>{text}</Link>
  } else {
    return <span>{text}</span>
  }
}

export default ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 == 1 ? '/' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  console.log(group)

  return (
    <Layout>
      <Container>
        <SEO title="Blog" type="Organization" location="/blog" />
        <Row>
          <PageTitle>Recent articles</PageTitle>
          {group.map(
            ({
              node: {
                id,
                description,
                timeToRead,
                frontmatter: { title, date, path, thumbnail, tags },
              },
            }) => (
              <CardPost
                key={id}
                description={description}
                timeToRead={timeToRead}
                title={title}
                date={date}
                path={path}
                thumbnail={thumbnail}
                tags={tags}
              />
            )
          )}
          <div className="previousLink">
            <NavLink
              test={first}
              url={`/blog/${previousUrl}`}
              text="Go to Previous Page"
            />
          </div>
          <div className="nextLink">
            <NavLink
              test={last}
              url={`/blog/${nextUrl}`}
              text="Go to Next Page"
            />
          </div>
        </Row>
      </Container>
    </Layout>
  )
}