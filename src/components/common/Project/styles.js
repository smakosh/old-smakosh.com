import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-bottom: 2.5rem;
`

export const Work = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 4fr);
    grid-gap: 1.2rem;
    align-items: center;
    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 680px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 4rem;
    }
`

export const Icon = styled.div`
    margin-right: 1rem;
`
