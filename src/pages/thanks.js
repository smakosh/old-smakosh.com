import React from 'react'
import { Head } from '../components/common'

const Thanks = () => (
	<div>
		<Head type="Organization" location="/thanks">Smakosh | Thanks!</Head>
		<div style={{
			maxWidth: 960, margin: '0 auto', padding: '1rem', marginBottom: '20rem'
		}}
		>
			<h2>Your mail has been sent successfully</h2>
			<p>I will get back to you as soon as possible!</p>
		</div>
	</div>
)

export default Thanks
