import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1rem 0;
  margin-bottom: 7rem;
  text-align: center;

  h2,
  p {
    color: #212121;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
    h2, p {
      color: #fff;
    }
  `};
`
