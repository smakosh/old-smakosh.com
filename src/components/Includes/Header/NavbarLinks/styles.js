import styled from 'styled-components'

export const NavLink = styled.div`
    color: #6d6d6d;
    text-decoration: none;
    ${({ device }) => device === 'desktop' && `
        margin-right: 1rem;
        &:last-child {
            margin-right: unset;
        }
    `}
    ${({ device }) => device === 'mobile' && `
        margin-bottom: 1rem;
        &:last-child {
            margin-bottom: unset;
        }
    `}
	&.current {
		color: #212121;
    }
    ${({ theme }) => theme === 'dark' && `
        color: #fff;
        &.current {
            color: #929090;
        }
    `}
`
export const Links = styled.div`
    ${({ device }) => device === 'desktop' && `
        @media (max-width: 960px) {
            display: none;
        }
    `}
    ${({ device }) => device === 'mobile' && `
        padding: 3rem;
        display: flex;
        flex-direction: column;
    `}
`

export const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    position: relative;
    top: .3rem;
    background: none;
    text-align: left;
    img {
        margin: 0;
    }
`
