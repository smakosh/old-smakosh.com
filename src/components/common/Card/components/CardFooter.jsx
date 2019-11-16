import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'providers/ThemeProvider'

const CardFooter = ({ description }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper theme={theme}>
      <p>{description}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 16px 24px;

  p {
    font-size: 16px;
    line-height: 1.46429em;
    margin-bottom: 1rem;
    color: #212121;

    ${({ theme }) =>
      theme === 'dark' &&
      `
				color: #fff;
		`};
  }
`

export default CardFooter
