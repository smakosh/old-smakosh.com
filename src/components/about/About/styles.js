import styled from 'styled-components'
import { flexbox, layout } from 'styled-system'

export const Flex = styled.div`
  ${layout}
  ${flexbox}

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Portrait = styled.div`
  ${layout}

  @media (max-width: 960px) {
    max-width: 100%;
  }
`
