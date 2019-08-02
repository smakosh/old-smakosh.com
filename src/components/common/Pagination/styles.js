import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 0;

  a {
    color: #00b6ff;
    font-size: 17pt;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Digit = styled.a`
  margin-right: 1rem;
  opacity: ${({ current }) => (current ? 1 : 0.3)};
`

export const Spacer = styled.div`
  margin-right: 1rem;
  color: #00b6ff;
`
