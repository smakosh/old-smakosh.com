import React from 'react'
import { ThemeContext } from '../../common'
import CardHeader from './components/CardHeader'
import CardBody from './components/CardBody'
import CardFooter from './components/CardFooter'
import { Wrapper } from './styles'

const Card = ({ id, link, title, image, description, svg }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<Wrapper id={id} theme={theme}>
				<CardHeader title={title} />
				<CardBody svg={svg} image={image} title={title} />
				<CardFooter description={description} link={link} />
			</Wrapper>
		)}
	</ThemeContext.Consumer>
)

export { Card }
