import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 48%;

  @media (max-width: 960px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`

export const Img = styled.img`
  margin-right: 0.6rem;
`

export const DetailsContainer = styled.div`
  padding-left: 1.5rem;
`

export const P = styled.p`
  display: flex;
  align-items: center;

  ${({ theme }) =>
    theme === 'dark' &&
    `
		color: #fff;
	`};
`

export const Text = styled.p`
  color: #212121;

  ${({ theme }) =>
    theme === 'dark' &&
    `
		color: #fff;
	`};
`
