import styled from 'styled-components'

const SmallerContainer = styled.div`
    max-width: 850px;
    margin: 0 auto;
    @media (max-width: 992px) {
        width: 95%;
    }
    ${({ thanks }) => thanks && `
        padding: 1rem 0;
        margin-bottom: 7rem;
    `}
    ${({ tc }) => tc && `
        text-align: center;
    `}
    ${({ tl }) => tl && `
        text-align: left;
    `}
    ${({ contact }) => contact && `
        padding: 2rem 0;
    `}
    ${({ copyrights }) => copyrights && `
        padding: 1rem;
    `}
    ${({ theme }) => theme === 'dark' && `
        background: #212121;
        color: #fff;
    `}
`

export { SmallerContainer }
