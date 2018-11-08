import React from 'react'
import { Intro, Skills, Work } from 'Components/LandingPage'
import { Layout, Head } from 'Common'

const IndexPage = () => (
	<Layout>
		<Head type="Organization">Smakosh | Hello world!</Head>
		<Intro />
		<Skills />
		<Work />
	</Layout>
)

export default IndexPage
