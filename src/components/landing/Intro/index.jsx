import React from 'react'
import { Link } from 'gatsby'
import { SmallerContainer, ThemeContext } from 'Common'
import { MagicalButton, Wrapper, Flex } from './styles'

const Intro = () => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper theme={theme} as={SmallerContainer}>
        <h1>I'm Ismail Ghallou</h1>
        <p>
          Also known as Smakosh, a self-taught Full Stack JavaScript Developer,
          Graphic and UI/UX Designer.
        </p>
        <Flex>
          <MagicalButton
            href="https://docs.google.com/document/d/1yxCORtBMNxj_ukgOxoYQfRu3HTUqjtNXwcMajzcftF8"
            rel="noopener noreferrer"
            target="_blank"
          >
            View resume
          </MagicalButton>
          <MagicalButton as={Link} to="/contact">
            Get In Touch
          </MagicalButton>
        </Flex>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
)

export { Intro }
