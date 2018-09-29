import React from 'react'
import { Intro, Skills, Work } from '../components/LandingPage'
import { Layout, Head } from '../components/common'

const IndexPage = () => (
	<Layout>
		<Head type="Organization">Smakosh | Hello world!</Head>
		<Intro />
		<Skills />
		<Work />
	</Layout>
)

export default IndexPage
