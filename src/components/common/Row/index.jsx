import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-wrap: wrap;

  ${({ landing }) =>
    landing
      ? `
      &:after {
      content: '';
      max-width: 32%;
      width: 100%;

      @media (max-width: 960px) {
        content: unset;
      }
    }
  `
      : `
    max-width: 70%;
    margin: 0 auto;

    @media (max-width: 960px) {
      max-width: 90%;
    }
    @media (max-width: 680px) {
      max-width: 100%;
    }
  `}
`
