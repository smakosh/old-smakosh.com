import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CardBody = ({ title, image }) => (
	<Wrapper>
		<Img fluid={image.childImageSharp.fluid} alt={title} />
	</Wrapper>
)

const Wrapper = styled.div`
	overflow: visible;

	.gatsby-image-wrapper {
		transition: 0.3s;
	}

	img {
		position: relative;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		display: block;
		transition: 0.3s;
	}
`

export default CardBody
