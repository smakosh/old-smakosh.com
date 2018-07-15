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
      sizes(maxWidth: 630 ) {
        ...GatsbyImageSharpSizes
      }
    }
    CatchitImage: imageSharp(id: { regex: "/catchit.jpg/" }) {
        sizes(maxWidth: 630 ) {
            ...GatsbyImageSharpSizes
        }
    }
    LucaImage: imageSharp(id: { regex: "/luca.jpg/" }) {
        sizes(maxWidth: 630 ) {
            ...GatsbyImageSharpSizes
        }
    }
    PlanetsImage: imageSharp(id: { regex: "/planets.jpg/" }) {
      sizes(maxWidth: 630 ) {
        ...GatsbyImageSharpSizes
      }
    }
    PostImage: imageSharp(id: { regex: "/post.jpg/" }) {
        sizes(maxWidth: 630 ) {
            ...GatsbyImageSharpSizes
        }
    }
    TodoImage: imageSharp(id: { regex: "/todo.jpg/" }) {
        sizes(maxWidth: 630 ) {
            ...GatsbyImageSharpSizes
        }
    }
  }
`

export default IndexPage
