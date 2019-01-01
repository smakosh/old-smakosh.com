import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Layout, SEO, SmallerContainer } from 'Common'

const NotFoundPage = () => (
	<Layout>
		<SEO
			location="/404"
			type="Organization"
			title="404"
			description="404 page not found"
		/>
		<Center as={SmallerContainer}>
			<h1>404 PAGE NOT FOUND</h1>
			<Link to="/">Go Back Home</Link>
		</Center>
	</Layout>
)

const Center = styled.div`
	padding: 4rem 0;
	text-align: center;
`

export default NotFoundPage
