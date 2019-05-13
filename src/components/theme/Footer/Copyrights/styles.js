import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
  padding: 1rem;

  ${({ theme }) =>
    theme === 'dark' &&
    `
			background: #212121;
			color: #fff;
  `};
`

export const Links = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Item = styled.img`
  margin: 0 0.2rem;

  ${({ img }) =>
    img &&
    `
		position: relative;
		top: .15rem;
	`};
`
