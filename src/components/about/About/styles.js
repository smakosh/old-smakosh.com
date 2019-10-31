import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Portrait = styled.div`
  width: 100%;
  max-width: 48%;

  @media (max-width: 960px) {
    max-width: 100%;
  }
`
