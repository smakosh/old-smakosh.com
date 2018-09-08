import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components';
import { Container, Head } from '../components/common'
import { Details, Socials } from '../components/AboutPage'

const About = ({ data }) => (
	<Container>
		<Head type="Organization" location="/about">
        Smakosh | About
		</Head>
		<h2>About me</h2>
		<AboutContainer>
			<Details />
			<Portrait>
				<a href={data.AboutImage.sizes.src}>
					<Img sizes={data.AboutImage.sizes} alt="just me chilling" />
				</a>
			</Portrait>
		</AboutContainer>
		<Socials />
	</Container>
)

const AboutContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	@media (max-width: 960px) {
			flex-direction: column;
	}
`

const Portrait = styled.div`
	position: relative;
	flex: 1;
	width: 100%;
	padding-left: .5rem;
`

export const pageQuery = graphql`
  query AboutImageQuery {
    AboutImage: imageSharp(id: { regex: "/me.jpg/" }) {
      sizes(maxWidth: 630 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default About
