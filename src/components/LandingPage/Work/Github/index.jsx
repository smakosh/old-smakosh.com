import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Project, GithubIcon } from 'Common'

const Github = () => (
	<StaticQuery
		query={
			graphql`{
				github {
					repositoryOwner(login:"smakosh") {
						repositories(first: 7, orderBy: {field: STARGAZERS, direction: DESC}) {
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
			}`
		}
		render={data => (
			<Project
				title="Open sourced on Github"
				icon={GithubIcon}
				type="Github"
				projects={data.github.repositoryOwner.repositories.edges}
				link="https://github.com/smakosh"
				color="#000"
				github
			/>
		)}
	/>
)

export default Github
