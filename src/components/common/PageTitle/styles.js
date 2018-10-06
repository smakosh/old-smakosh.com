import styled from 'styled-components'

export const StyledTitle = styled.h1`
    margin-bottom: 2rem
    ${({ theme }) => theme === 'dark' && `
        color: #fff;
    `}
`
