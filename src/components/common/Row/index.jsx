import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &:after {
    content: '';
    max-width: 32%;
    width: 100%;

    @media (max-width: 960px) {
      content: unset;
    }
  }
`
