import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const NavbarLinks = ({ device }) => (
	<Links device={device}>
		<NavLink to="/" device={device} activeClassName="current" exact>Home</NavLink>
		<NavLink to="/about" device={device} activeClassName="current">About</NavLink>
		<NavLink to="/blog" device={device} activeClassName="current">Blog</NavLink>
		<NavLink to="/contact" device={device} activeClassName="current">Contact</NavLink>
	</Links>
)

const NavLink = styled(Link)`
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
`
const Links = styled.div`
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

export default NavbarLinks
