import React from 'react'
import { Link } from 'gatsby'
import { SmallerContainer, ThemeContext } from 'Common'
import { Wrapper } from './styles'

export default () => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<Wrapper theme={theme} as={SmallerContainer}>
				<h2>Your email has been sent successfully</h2>
				<p>I will get back to you as soon as possible!</p>
				<Link to="/">Go Back Home</Link>
			</Wrapper>
		)}
	</ThemeContext.Consumer>
)
