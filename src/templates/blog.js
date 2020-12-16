import React from 'react'
import {
  Layout,
  Container,
  SEO,
  PageTitle,
  CardPost,
  Row,
  Pagination,
} from 'components/common'

export default ({ pageContext }) => {
  const { group, index, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? '/' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <Layout>
      <Container>
        <SEO title="Blog" type="Organization" location="/blog" />
        <Row>
          <PageTitle>Recent articles</PageTitle>
          <Pagination
            pathPrefix="/blog"
            index={index}
            pageCount={pageCount}
            previousUrl={previousUrl}
            nextUrl={nextUrl}
          />
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
          <Pagination
            pathPrefix="/blog"
            index={index}
            pageCount={pageCount}
            previousUrl={previousUrl}
            nextUrl={nextUrl}
          />
        </Row>
      </Container>
    </Layout>
  )
}
