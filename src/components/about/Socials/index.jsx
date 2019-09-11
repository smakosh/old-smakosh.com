import React, { useContext } from 'react'
import { ThemeContext } from 'components/common'
import Social from './Social'
import Creative from './Creative'
import { Wrapper, Title } from './styles'

export const Socials = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper>
      <Title theme={theme}>Or somewhere else on the web</Title>
      <Social theme={theme} />
      <Creative theme={theme} />
    </Wrapper>
  )
}
