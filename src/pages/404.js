import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Head } from '../components/common'

const NotFoundPage = () => (
	<React.Fragment>
		<Head type="Organization">Smakosh | 404</Head>
		<Center>
			<h1>404 PAGE NOT FOUND</h1>
			<Link to="/">Go Back Home</Link>
		</Center>
	</React.Fragment>
)

const Center = styled.div`
	max-width: 960px;
	margin: 0 auto;
	padding: 4rem 0;
	text-align: center;
`

export default NotFoundPage
