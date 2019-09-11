import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Logo, ThemeContext } from 'components/common'
import Copyrights from './Copyrights'
import Social from './Social'
import {
  Wrapper,
  FooterContainer,
  FullContainer,
  List,
  Brand,
  StyledLogo,
} from './styles'

export const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <FooterContainer theme={theme}>
      <FullContainer>
        <Wrapper as={Container}>
          <List>
            <li>
              <Brand as={Link} to="/">
                <StyledLogo as={Logo} color="#fff" strokeWidth="2" /> Smakosh
              </Brand>
            </li>
          </List>
          <List>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
            <li>
              <Link to="/talks/">Talks</Link>
            </li>
          </List>
          <List>
            <li>Follow me on</li>
            <Social />
          </List>
        </Wrapper>
      </FullContainer>
      <Copyrights />
    </FooterContainer>
  )
}
