import React from 'react'
import styled from 'styled-components'

const CardHeader = ({ title }) => (
	<Wrapper>
		<h3>{title}</h3>
	</Wrapper>
)

const Wrapper = styled.div`
    padding: 1rem;
    h3 {
        font-size: .9em;
        margin: 0;
        font-weight: normal;
        @media (max-width: 680px) {
            font-size: 1.2em;
        }
    }
`

export default CardHeader
