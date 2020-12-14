import React from 'react'
import { range } from 'helpers'
import { Link } from 'gatsby'
import { Wrapper, Spacer, Digit } from './styles'

export const Pagination = ({
  pathPrefix,
  index,
  pageCount,
  previousUrl,
  nextUrl,
}) => {
  const getFullPath = n => {
    if (pathPrefix === '/') {
      return n === 1 ? pathPrefix : `${pathPrefix}/${n}`
    } else {
      return n === 1 ? pathPrefix : `${pathPrefix}/${n}`
    }
  }

  const getPageLinks = () => {
    const maxPages = 3
    const previousPage = index === 1 ? index : index - 1
    const pagesRange = range(previousPage, pageCount + 1 - previousPage)
    const truncatedRange = pagesRange.slice(0, maxPages)

    if (pagesRange[0] > 2) {
      truncatedRange.unshift(null)
    }

    if (pagesRange[0] > 1) {
      truncatedRange.unshift(1)
    }

    if (pagesRange[0] + 1 === pageCount && pagesRange[0] - 1 > 0) {
      truncatedRange.splice(
        pagesRange.length - 1 - maxPages,
        0,
        pagesRange[0] - 1
      )
    }

    if (pagesRange[0] + maxPages < pageCount) {
      truncatedRange.push(null)
    }

    if (pagesRange[0] + maxPages - 1 < pageCount) {
      truncatedRange.push(pageCount)
    }

    return [...new Set(truncatedRange)].map((page, i) =>
      page === null ? (
        <Spacer key={i} aria-hidden={true}>
          <span>....</span>
        </Spacer>
      ) : (
        <Digit
          current={index === page}
          key={`PaginatorPage_${page}`}
          to={getFullPath(page)}
          as={Link}
        >
          {page}
        </Digit>
      )
    )
  }

  return (
    <Wrapper>
      {index > 1 && (
        <Link style={{ marginRight: 10 }} to={`/blog/${previousUrl}`}>
          Prev
        </Link>
      )}
      {getPageLinks()}
      {index < pageCount && <Link to={`/blog/${nextUrl}`}>Next</Link>}
    </Wrapper>
  )
}
