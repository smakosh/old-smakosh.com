import styled from 'styled-components'

export const Title = styled.h4`
  color: #212121;

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const Wrapper = styled.div`
  margin-bottom: 2.5rem;
`

export const Work = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.2rem;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ side }) =>
    side &&
    `
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 3rem;

			@media (max-width: 960px) {
				grid-template-columns: repeat(1, 1fr);
			}
	`}

  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 4rem;
  }

  ${({ github }) =>
    github &&
    `
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(1, 8fr);
	`};
`

export const Icon = styled.div`
  margin-right: 1rem;
`
