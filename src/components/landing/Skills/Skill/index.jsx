import React from 'react'
import { Wrapper, Grow, Title } from './styles'

const Skill = ({ icon, title }) => (
  <Wrapper>
    <Grow src={icon} alt={title} />
    <Title>{title}</Title>
  </Wrapper>
)

export default Skill
