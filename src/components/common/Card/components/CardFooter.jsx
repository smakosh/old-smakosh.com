import React from 'react'
import styled from 'styled-components'

const CardFooter = ({ description, link }) => (
	<Wrapper>
		<p>{description}</p>
		<a target="_blank" rel="noopener noreferrer" href={link}>Visit link</a>
	</Wrapper>
)

const Wrapper = styled.div`
    padding: 16px 24px;
    a {
        color: rgb(0, 119, 255);
        font-weight: normal;
        font-size: 16px;
        text-transform: uppercase;
    }
    p {
        color: #212121;
        font-size: 16px;
        line-height: 1.46429em;
        margin-bottom: 1rem;
    }
`

export default CardFooter
