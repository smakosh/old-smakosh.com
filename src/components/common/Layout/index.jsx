import React from 'react'
import styled from 'styled-components'
import { ThemeContext, Provider, Subscribe } from 'Common'
import { Header, Footer } from 'Theme'
import './layout.scss'
import './main.scss'

export const Layout = ({ children }) => (
	<Provider>
		<ThemeContext.Consumer>
			{({ theme }) => (
				<>
					<Header />
					<LayoutStyled theme={theme}>
						{children}
						<Subscribe />
					</LayoutStyled>
					<Footer />
				</>
			)}
		</ThemeContext.Consumer>
	</Provider>
)

const LayoutStyled = styled.div`
	width: 100%;
	padding-top: 7rem;

	${({ theme }) =>
		theme === 'dark' &&
		`
		background: #212121;
	`};
`
