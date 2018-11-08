import React from 'react'
import styled from 'styled-components'
import { ThemeContext, Provider, Subscribe } from 'Common'
import Header from 'Theme/Header'
import Footer from 'Theme/Footer'
import './index.scss'
import './main.scss'

const Layout = ({ children }) => (
	<Provider>
		<ThemeContext.Consumer>
			{({ theme }) => (
				<React.Fragment>
					<Header />
					<LayoutStyled theme={theme}>
						{children}
						<Subscribe />
					</LayoutStyled>
					<Footer />
				</React.Fragment>
			)}
		</ThemeContext.Consumer>
	</Provider>
)

const LayoutStyled = styled.div`
	width: 100%;
	padding-top: 7rem;

	${({ theme }) => theme === 'dark' && `
		background: #212121;
	`}
`

export { Layout }
