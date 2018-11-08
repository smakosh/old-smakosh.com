import React from 'react'
import { Link } from 'gatsby'
import { SmallerContainer, ThemeContext } from 'Common'

export default () => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<SmallerContainer thanks tc>
				<h2 style={{ color: theme === 'dark' ? '#fff' : '#212121' }}>Your email has been sent successfully</h2>
				<p style={{ color: theme === 'dark' ? '#fff' : '#212121' }}>I will get back to you as soon as possible!</p>
				<Link to="/">Go Back Home</Link>
			</SmallerContainer>
		)}
	</ThemeContext.Consumer>
)
