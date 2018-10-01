import React from 'react'
import styled from 'styled-components'
import Subscribe from '../../common/Subscribe'
import Header from '../../Includes/Header'
import Footer from '../../Includes/Footer'
import './index.scss'
import './main.scss'

const Layout = ({ children }) => (
	<React.Fragment>
		<Header />
		<LayoutStyled>
			{children}
			<Subscribe />
		</LayoutStyled>
		<Footer />
	</React.Fragment>
)

const LayoutStyled = styled.div`
	width: 100%;
	padding-top: 7rem;
`

export { Layout }
