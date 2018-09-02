import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Container } from '../../common'
import Envelope from '../../../../static/about/envelope.svg'
import Phone from '../../../../static/about/phone.svg'
import Marker from '../../../../static/about/marker.svg'
import './style.scss'

const Details = () => (
	<Container details>
		<p>
        I’m Ismail Ghallou, also known as Smakosh, I’m a self-taught Graphic,
        UI/UX Designer and full stack developer. I'm really interested in Technology.
        Science including mathematics, physics, Ai, Blockchain & computer science
        belong to my interests as well, you can know more about me by
        reading my <Link to="/blog">articles</Link>.
		</p>
		<p>Currently working remotely at <a href="https://obytes.com/?ref=smakosh" target="_blank" rel="noopener noreferrer">Obytes</a> as a Front end engineer.</p>
		<p>For business inquiries feel free to get in touch with me at:</p>
		<DetailsContainer>
			<P>
				<Img src={Envelope} alt="email" />
                ismai23l@hotmail.com
			</P>
			<P>
				<Img src={Phone} alt="phone" />
                +212 663-532761
			</P>
			<P>
				<Img src={Marker} alt="address" />
                Nr 23 Lot El Waha, Errachidia, Morocco
			</P>
		</DetailsContainer>
	</Container>
)

const Img = styled.img`
    margin-right: .6rem;
`

const DetailsContainer = styled.div`
	padding-left: 1.5rem;
`

const P = styled.p`
	display: flex;
	align-items: center;
`

export { Details }
