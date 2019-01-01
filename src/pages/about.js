import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Container, SEO, PageTitle } from 'Common'
import { Details, Socials } from 'Components/about'

const About = () => (
	<StaticQuery
		query={graphql`
			query AboutImageQuery {
				AboutImage: imageSharp(fluid: { originalName: { regex: "/me.jpg/" } }) {
					...imageFields
				}
			}
		`}
		render={data => (
			<Layout>
				<Container>
					<SEO title="About" type="Organization" location="/about" />
					<PageTitle>About me</PageTitle>
					<Flex>
						<Details />
						<Portrait>
							<a href={data.AboutImage.fluid.src}>
								<Img fluid={data.AboutImage.fluid} alt="just me chilling" />
							</a>
						</Portrait>
					</Flex>
					<Socials />
				</Container>
			</Layout>
		)}
	/>
)

const Flex = styled.div`
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
	padding-left: 0.5rem;
`

export default About
