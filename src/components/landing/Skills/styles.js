import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 1.45rem;
  color: #212121;
  padding: 8rem 1rem 7rem 1rem;
  clip-path: polygon(0% 14%, 100% 0, 100% 84%, 0 100%);
  background: #f9f9f9;
  text-align: center;

  ${({ theme }) =>
    theme === 'dark' &&
    `
		color: #fff;
		background: #2b2a2a;
	`}
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 0;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`

export const Tech = styled.div`
  text-align: left;

  a {
    color: #212121;
    text-decoration: underline;

    ${({ theme }) =>
      theme === 'dark' &&
      `
			color: #fff;
		`}
  }
`
