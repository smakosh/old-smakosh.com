import styled from 'styled-components'

export const StyledSubtitle = styled.h2`
    margin-bottom: 2rem
    ${({ theme }) => theme === 'dark' && `
        color: #fff;
    `}
`
