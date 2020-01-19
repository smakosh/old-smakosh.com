import React, { useContext } from 'react'
import Img from 'gatsby-image'
import { Review, Human, Details } from './styles'
import { ThemeContext } from 'providers/ThemeProvider'

export default ({ name, review, title, avatar: { childImageSharp } }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <Review theme={theme}>
        <p>"{review}"</p>
      </Review>
      <Human theme={theme}>
        <Img
          style={{
            padding: '1.5rem',
            borderRadius: '50%',
            border:
              theme === 'dark' ? '3px solid #d8d8d8' : '3px solid #383838',
          }}
          fluid={childImageSharp.fluid}
          alt={name}
        />
        <Details theme={theme}>
          <h4>{name}</h4>
          <p dangerouslySetInnerHTML={{ __html: title }} />
        </Details>
      </Human>
    </div>
  )
}
