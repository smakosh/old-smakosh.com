import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Project, GithubIcon, Container, Subtitle } from 'Common'

export const Github = () => (
	<StaticQuery
		query={graphql`
			{
				github {
					repositoryOwner(login: "smakosh") {
						repositories(
							first: 7
							orderBy: { field: STARGAZERS, direction: DESC }
						) {
							edges {
								node {
									id
									name
									url
									description
									stargazers {
										totalCount
									}
									forkCount
								}
							}
						}
					}
				}
			}
		`}
		render={({ github }) => (
			<Container>
				<Subtitle>Open Source</Subtitle>
				<Project
					icon={GithubIcon}
					type="Github"
					projects={github.repositoryOwner.repositories.edges}
					link="https://github.com/smakosh"
					color="#000"
					github
				/>
			</Container>
		)}
	/>
)
