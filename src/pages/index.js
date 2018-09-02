import React from 'react'
import { Intro, Skills, Work } from '../components/LandingPage'
import { Head } from '../components/common';

const IndexPage = ({ data }) => (
	<React.Fragment>
		<Head type="Organization">Smakosh | Hello world!</Head>
		<Intro />
		<Skills />
		<Work
			BehancefirstImg={data.UbouxImage.sizes}
			BehancesecondImg={data.CatchitImage.sizes}
			BehancethirdImg={data.LucaImage.sizes}
			DribbblefirstImg={data.PlanetsImage.sizes}
			DribbblesecondImg={data.PostImage.sizes}
			DribbblethirdImg={data.TodoImage.sizes}
		/>
	</React.Fragment>
)

export const pageQuery = graphql`
  query IndexImageQuery {
    UbouxImage: imageSharp(id: { regex: "/uboux.jpg/" }) {
        ...imageFields
    }
    CatchitImage: imageSharp(id: { regex: "/catchit.jpg/" }) {
        ...imageFields
    }
    LucaImage: imageSharp(id: { regex: "/luca.jpg/" }) {
        ...imageFields
    }
    PlanetsImage: imageSharp(id: { regex: "/planets.jpg/" }) {
        ...imageFields
    }
    PostImage: imageSharp(id: { regex: "/post.jpg/" }) {
        ...imageFields
    }
    TodoImage: imageSharp(id: { regex: "/todo.jpg/" }) {
        ...imageFields
    }
  }
`

export const imageFields = graphql`
    fragment imageFields on ImageSharp {
        sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
        }
    }
`

export default IndexPage
