import React from 'react'
import styled from 'styled-components'

const More = ({ link, color, children }) => (
	<Item href={link} target="_blank" rel="noopener noreferrer" color={color}>
		{ children }
        See more
	</Item>
)

const Item = styled.a`
	color: #fff;
	text-decoration: none;
	border-radius: .2rem;
	width: 70%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2.5rem;
	${({ color }) => color && `
		background-color: ${color};
	`}
	@media (max-width: 1100px) {
		padding: .6rem 1rem;
	}
	@media (max-width: 680px) {
		grid-row: 4;
		padding: .6rem 1.4rem;
	}
`

export { More }
