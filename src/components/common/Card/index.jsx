import React from 'react'
import styled from 'styled-components'
import CardHeader from './components/CardHeader'
import CardBody from './components/CardBody'
import CardFooter from './components/CardFooter'

const Card = ({ id, link, title, image, description, svg }) => (
	<Wrapper id={id}>
		<CardHeader title={title} />
		<CardBody svg={svg} image={image} title={title} />
		<CardFooter description={description} link={link} />
	</Wrapper>
)

const Wrapper = styled.div`
	border-radius: 2px;
	background: #fff;
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 
				0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
				0px 3px 1px -2px rgba(0, 0, 0, 0.12);
	transition: .5s;
	&:hover {
		box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.09);
		transition: .5s;
	}
	${({ id }) => id === 0 && `
		@media (max-width: 680px) {
			grid-row: 3;
		}
	`}
	${({ id }) => id === 1 && `
		@media (max-width: 680px) {
			grid-row: 2;
		}
	`}
	${({ id }) => id === 2 && `
		@media (max-width: 680px) {
			grid-row: 1;
		}
	`}
`

export { Card }
