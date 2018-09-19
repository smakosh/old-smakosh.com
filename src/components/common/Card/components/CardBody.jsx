import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CardBody = ({ svg, title, image }) => (
	<Wrapper svg={svg}>
		{svg ? (
			<img src={image} alt={title} />
		) : (
			<Img fluid={image} alt={title} />
		)}
	</Wrapper>
)

const Wrapper = styled.div`
    overflow: hidden;
    ${({ svg }) => svg && `
        padding: 1rem 4rem;
    `}
    img  {
        position: relative;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        display: block;
    }
`

export default CardBody
