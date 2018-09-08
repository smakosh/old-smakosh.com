import React from 'react'
import Link from 'gatsby-link'
import { Head, SmallerContainer } from '../components/common'

const Thanks = () => (
	<React.Fragment>
		<Head type="Organization" location="/thanks">Smakosh | Thanks!</Head>
		<SmallerContainer thanks tc>
			<h2>Your email has been sent successfully</h2>
			<p>I will get back to you as soon as possible!</p>
			<Link to="/">Go Back Home</Link>
		</SmallerContainer>
	</React.Fragment>
)

export default Thanks
