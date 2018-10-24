import styled from 'styled-components'

export const SingleSkill = styled.div`
    text-align: center;

    @media (max-width: 680px) {
        align-self: center;
        margin-bottom: 2rem;

        &:last-child {
            margin-bottom: unset;
        }
    }
`

export const Grow = styled.img`
    width: 200px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    margin: 0 auto 1rem auto;

    &:hover  {
        transform: scale(1.1);
        transition: all .2s ease-in-out;
    }

    ${({ smaller }) => smaller && `
        width: 120px;
    `}
`

export const Title = styled.h4`
    font-weight: normal;
`
