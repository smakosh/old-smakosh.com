import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { Wrapper, Overlay } from './styles'
import useStickyHeader from 'hooks/useStickyHeader'

export const Header = () => {
  const [isHomePage, sidebar, toggle] = useStickyHeader()
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper isHomePage={isHomePage} theme={theme}>
      <Overlay sidebar={sidebar} onClick={toggle} />
      <Navbar />
      <Hamburger isHomePage={isHomePage} sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  )
}
