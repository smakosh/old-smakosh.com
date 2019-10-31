import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Logo } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, BrandLogo, Brand } from './styles'

export default () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper as={Container}>
      <Brand as={Link} theme={theme} to="/">
        <BrandLogo
          as={Logo}
          color={theme === 'dark' ? '#fff' : '#212121'}
          strokeWidth="2"
        />
        Smakosh
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  )
}
