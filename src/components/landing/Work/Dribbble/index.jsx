import React from 'react'
import { Project, DribbbleIcon } from 'Common'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
	<StaticQuery
		query={graphql`
			query {
				shots: allDribbbleYaml {
					edges {
						node {
							id
							title
							image {
								childImageSharp {
									fluid(maxWidth: 630) {
										...GatsbyImageSharpFluid_tracedSVG
									}
								}
							}
							link
							description
						}
					}
				}
			}
		`}
		render={({ shots }) => (
			<Project
				icon={DribbbleIcon}
				title="Shared on Dribbble"
				projects={shots}
				link="https://dribbble.com/smakosh"
				color="#ea4c89"
			/>
		)}
	/>
)
