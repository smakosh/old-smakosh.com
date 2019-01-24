import React, { useContext } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, ThemeContext } from 'Common'
import Service from './Service'
import { Wrapper, Grid } from './styles'

export const Services = () => {
	const { theme } = useContext(ThemeContext)
	return (
		<StaticQuery
			query={graphql`
				query {
					services: allServicesYaml {
						edges {
							node {
								id
								title
								icon
								description
							}
						}
					}
				}
			`}
			render={({ services }) => (
				<Wrapper theme={theme}>
					<Container>
						<h2>Services</h2>
						<Grid>
							{services.edges.map(({ node }) => (
								<Service theme={theme} key={node.id} {...node} />
							))}
						</Grid>
					</Container>
				</Wrapper>
			)}
		/>
	)
}
