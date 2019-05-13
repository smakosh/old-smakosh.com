import styled from 'styled-components'

export const Item = styled.a`
  color: #fff;
  text-decoration: none;
  border-radius: 0.2rem;
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;

  @media (max-width: 1100px) {
    padding: 0.6rem 1rem;
  }

  @media (max-width: 680px) {
    grid-row: 4;
    padding: 0.6rem 1.4rem;
  }

  ${({ color }) =>
    color &&
    `
		background-color: ${color};
	`};
`
