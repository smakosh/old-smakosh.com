import React, { useContext } from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import { ThemeContext } from 'components/common'
import {
  Item,
  Post,
  ArticleContent,
  ArticleImg,
  ArticleTitle,
  Paragraph,
  Info,
  StyledSpan,
  TalkDetails,
  Slides,
  Demos,
} from './styles'

export const CardPost = ({
  path,
  thumbnail,
  title,
  description,
  date,
  timeToRead,
  landing,
  demos,
  slides,
}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Item landing={landing}>
      <Post
        onClick={() => {
          if (!path) return null
          navigate(path)
        }}
        path={path}
        theme={theme}
        talk={slides}
      >
        <ArticleImg landing={landing} talk={slides}>
          <Img fluid={thumbnail.childImageSharp.fluid} />
        </ArticleImg>
        <ArticleContent>
          <ArticleTitle theme={theme}>{title}</ArticleTitle>
          <Paragraph landing={landing} theme={theme}>
            {description}
          </Paragraph>
          {slides && (
            <TalkDetails>
              <Slides>
                <a href={slides} target="_blank" rel="noopener noreferrer">
                  Slides
                </a>
              </Slides>
              {demos && (
                <Demos>
                  {demos.map(({ link }, i) => (
                    <a
                      href={link}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo {i + 1}
                    </a>
                  ))}
                </Demos>
              )}
            </TalkDetails>
          )}
          <Info theme={theme}>
            {date}
            {timeToRead && <StyledSpan>{timeToRead} min</StyledSpan>}
          </Info>
        </ArticleContent>
      </Post>
    </Item>
  )
}
