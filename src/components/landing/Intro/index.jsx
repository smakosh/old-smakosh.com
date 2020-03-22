import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { SmallerContainer } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import { MagicalButton, Wrapper, Flex } from './styles'

export const Intro = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper theme={theme} as={SmallerContainer}>
      <h1>I'm Ismail Ghallou</h1>
      <p>
        Also known as Smakosh, a self-taught Full Stack JavaScript Developer,
        Graphic and UI/UX Designer.
        <br /> I help founders add value to society by crafting software using
        JavaScript tools, I love open source and building side projects.
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
  )
}
