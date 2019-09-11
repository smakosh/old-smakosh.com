import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 0;

  @media (max-width: 960px) {
    text-align: center;
  }
`

export const Title = styled.h2`
  margin-bottom: 3rem;

  ${({ theme }) =>
    theme === 'dark' &&
    `
		color: #fff;
	`}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 4fr);
  grid-gap: 1.2rem;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
    text-align: center;

    img {
      width: 48px;
      height: 48px;
    }
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
