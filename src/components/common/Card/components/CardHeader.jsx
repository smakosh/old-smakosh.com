import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'Common'

const CardHeader = ({ title }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<Wrapper theme={theme}>
				<h3>{title}</h3>
			</Wrapper>
		)}
	</ThemeContext.Consumer>
)

const Wrapper = styled.div`
	padding: 1rem;

	h3 {
		font-size: 0.9em;
		margin: 0;
		font-weight: normal;
		color: #212121;

		@media (max-width: 680px) {
			font-size: 1.2em;
		}

		${({ theme }) =>
		theme === 'dark' &&
			`
				color: #fff;
		`};
	}
`

export default CardHeader
