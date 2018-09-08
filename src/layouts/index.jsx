import React from 'react'
import styled from 'styled-components'
import { Subscribe } from '../components/common'
import { Header, Footer } from '../components/Includes'
import './index.scss'
import './main.scss'

const TemplateWrapper = ({ children }) => (
	<React.Fragment>
		<Header />
		<Layout>
			{children()}
			<Subscribe />
		</Layout>
		<Footer />
	</React.Fragment>
)

const Layout = styled.div`
	width: 100%;
	padding-top: 7rem;
`

export default TemplateWrapper
