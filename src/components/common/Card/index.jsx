import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import CardHeader from './components/CardHeader'
import CardBody from './components/CardBody'
import CardFooter from './components/CardFooter'
import { Wrapper, StyledCard } from './styles'

export const Card = ({ id, link, title, image, description }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper id={id} as="a" href={link}>
      <StyledCard theme={theme}>
        <CardHeader title={title} />
        <CardBody image={image} title={title} />
        <CardFooter description={description} />
      </StyledCard>
    </Wrapper>
  )
}
