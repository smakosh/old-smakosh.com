import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import StarIcon from 'assets/icons/star.svg'
import ForkIcon from 'assets/icons/fork.svg'
import StarIconWhite from 'assets/icons/star-white.svg'
import ForkIconWhite from 'assets/icons/fork-white.svg'
import { Wrapper, StyledRepository, Stars, Header, Description } from './styles'

export const Repository = ({
  id,
  node: {
    name,
    url,
    description,
    stargazers: { totalCount },
    forkCount,
  },
}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper id={id} as="a" href={url}>
      <StyledRepository theme={theme}>
        <Header theme={theme}>
          <h3>{name}</h3>
        </Header>
        <Description theme={theme}>
          <p>{description}</p>
        </Description>
        <Stars theme={theme}>
          <img src={theme === 'dark' ? StarIconWhite : StarIcon} alt="stars" />
          {totalCount}
          <img src={theme === 'dark' ? ForkIconWhite : ForkIcon} alt="forks" />
          {forkCount}
        </Stars>
      </StyledRepository>
    </Wrapper>
  )
}
