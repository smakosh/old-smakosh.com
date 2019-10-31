import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { SmallerContainer } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import { Wrapper } from './styles'

export default () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper theme={theme} as={SmallerContainer}>
      <h2>Your email has been sent successfully</h2>
      <p>I will get back to you as soon as possible!</p>
      <Link to="/">Go Back Home</Link>
    </Wrapper>
  )
}
