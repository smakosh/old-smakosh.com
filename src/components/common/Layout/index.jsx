import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { Subscribe } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import { Header, Footer } from 'components/theme'
import { Wrapper } from './styles'
import globalTheme from './globalTheme'
import './fonts.css'
import './layout.css'

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={globalTheme}>
      <Header />
      <Wrapper theme={theme}>
        {children}
        <Subscribe />
      </Wrapper>
      <Footer />
    </ThemeProvider>
  )
}
