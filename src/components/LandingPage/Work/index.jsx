import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Subtitle } from '../../common'
import Behance from './Behance'
import Dribbble from './Dribbble'
import Github from './Github'

export const imageFields = graphql`
    fragment imageFields on ImageSharp {
        fluid(maxWidth: 630) {
            ...GatsbyImageSharpFluid_tracedSVG
        }
    }
`

const Work = () => (
	<StaticQuery
		query={graphql`
			query IndexImageQuery {
				UbouxImage: imageSharp(fluid: {originalName: { regex: "/uboux.jpg/" }}) {
					...imageFields
				}
				CatchitImage: imageSharp(fluid: {originalName: { regex: "/catchit.jpg/" }}) {
					...imageFields
				}
				LucaImage: imageSharp(fluid: {originalName: { regex: "/luca.jpg/" }}) {
					...imageFields
				}
				PlanetsImage: imageSharp(fluid: {originalName: { regex: "/planets.jpg/" }}) {
					...imageFields
				}
				PostImage: imageSharp(fluid: {originalName: { regex: "/post.jpg/" }}) {
					...imageFields
				}
				TodoImage: imageSharp(fluid: {originalName: { regex: "/todo.jpg/" }}) {
					...imageFields
				}
			}
		`}
		render={data => (
			<Container>
				<Subtitle>Work</Subtitle>
				<Behance
					firstImg={data.UbouxImage.fluid}
					secondImg={data.CatchitImage.fluid}
					thirdImg={data.LucaImage.fluid}
				/>
				<Dribbble
					firstImg={data.PlanetsImage.fluid}
					secondImg={data.PostImage.fluid}
					thirdImg={data.TodoImage.fluid}
				/>
				<Github />
			</Container>
		)}
	/>
)

export { Work }
