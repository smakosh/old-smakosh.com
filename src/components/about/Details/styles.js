import styled from 'styled-components'
import { color, lineHeight, layout } from 'styled-system'

export const Wrapper = styled.div`
  ${layout}

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
  ${color}
`

export const Text = styled.p`
  ${color}
  ${lineHeight}
`
