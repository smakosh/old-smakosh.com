import styled from 'styled-components'

export const Social = styled.a`
  margin-right: 1rem;

  ${({ last }) =>
    last &&
    `
  margin-right: unset;
`};
`

export const Grow = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`
