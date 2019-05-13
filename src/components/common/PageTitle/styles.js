import styled from 'styled-components'

export const StyledTitle = styled.h1`
  margin-bottom: 2rem;

  @media (max-width: 960px) {
    text-align: center;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`
