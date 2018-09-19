import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';
import { Layout, Container, Head } from '../components/common'
import { Details, Socials } from '../components/AboutPage'

const About = () => (
	<StaticQuery
		query={graphql`
			query AboutImageQuery {
				AboutImage: imageSharp(fluid: {originalName: { regex: "/me.jpg/" }}) {
					fluid(maxWidth: 630 ) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
	`}
		render={data => (
			<Layout>
				<Container>
					<Head type="Organization" location="/about">
						Smakosh | About
					</Head>
					<h2>About me</h2>
					<AboutContainer>
						<Details />
						<Portrait>
							<a href={data.AboutImage.fluid.src}>
								<Img fluid={data.AboutImage.fluid} alt="just me chilling" />
							</a>
						</Portrait>
					</AboutContainer>
					<Socials />
				</Container>
			</Layout>
		)}
	/>
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

export default About
