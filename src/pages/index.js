import React from 'react'
import Helmet from 'react-helmet'

import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Work from '../components/Work'

const IndexPage = ({data}) => {
  return (
    <div>
      <Helmet title="Smakosh | Hello world!" />
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
    </div>
)
}

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
