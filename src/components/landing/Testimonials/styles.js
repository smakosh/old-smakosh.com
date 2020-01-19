import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 0;
`

export const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Item = styled.div`
  max-width: 23%;
  width: 100%;

  @media (max-width: 960px) {
    max-width: 48%;
    margin-bottom: 3rem;
  }

  @media (max-width: 680px) {
    max-width: 100%;
  }
`
