import React, { useContext } from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import { Tag } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
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
  Tags,
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
  tags,
  watch,
}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Item landing={landing}>
      <Post theme={theme} talk={slides}>
        <ArticleImg
          onClick={() => {
            if (!path) return null
            navigate(path)
          }}
          landing={landing}
          talk={slides}
          path={path}
        >
          <Img fluid={thumbnail.childImageSharp.fluid} />
        </ArticleImg>
        <ArticleContent>
          <ArticleTitle
            onClick={() => {
              if (!path) return null
              navigate(path)
            }}
            theme={theme}
            path={path}
          >
            {title}
          </ArticleTitle>
          <Paragraph
            onClick={() => {
              if (!path) return null
              navigate(path)
            }}
            landing={landing}
            theme={theme}
            path={path}
          >
            {description}
          </Paragraph>
          {tags && (
            <Tags>
              {tags.map((item, i) => (
                <Tag tag={item} link={`/${item}/`} key={i}>
                  {item}
                </Tag>
              ))}
            </Tags>
          )}
          {slides && (
            <TalkDetails>
              <Slides>
                <a href={slides} target="_blank" rel="noopener noreferrer">
                  Slides
                </a>
              </Slides>
              {watch && (
                <Slides>
                  <a href={watch} target="_blank" rel="noopener noreferrer">
                    Watch talk
                  </a>
                </Slides>
              )}
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
          <Info
            theme={theme}
            onClick={() => {
              if (!path) return null
              navigate(path)
            }}
            path={path}
          >
            {date}
            {timeToRead && <StyledSpan>{timeToRead} min</StyledSpan>}
          </Info>
        </ArticleContent>
      </Post>
    </Item>
  )
}
