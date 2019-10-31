import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'providers/ThemeProvider'

const CardHeader = ({ title }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper theme={theme}>
      <h3>{title}</h3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;

  h3 {
    font-size: 0.9em;
    margin: 0;
    font-weight: 600;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 1.2em;
    }

    ${({ theme }) =>
      theme === 'dark' &&
      `
				color: #fff;
		`};
  }
`

export default CardHeader
