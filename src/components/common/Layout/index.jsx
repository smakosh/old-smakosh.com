import React from 'react'
import { ThemeContext, Subscribe } from 'Common'
import { ThemeProvider } from 'Providers'
import { Header, Footer } from 'Theme'
import { GlobalStyle, LayoutStyled } from './styles'

export const Layout = ({ children }) => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {({ theme }) => (
        <>
          <GlobalStyle />
          <Header />
          <LayoutStyled theme={theme}>
            {children}
            <Subscribe />
          </LayoutStyled>
          <Footer />
        </>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
)
