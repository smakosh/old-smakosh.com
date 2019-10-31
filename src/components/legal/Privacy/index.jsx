import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'providers/ThemeProvider'

export default ({ content }) => {
  const { theme } = useContext(ThemeContext)

  return <Wrapper theme={theme} dangerouslySetInnerHTML={{ __html: content }} />
}

const Wrapper = styled.div`
  ${({ theme }) =>
    theme === 'dark'
      ? `
    color: #fff;
  `
      : `
    color: #000;
  `}
`
