import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavbarLinks = ({ device }) => (
	<Links device={device}>
		<NavLink as={Link} to="/" device={device} activeClassName="current">Home</NavLink>
		<NavLink as={Link} to="/about" device={device} activeClassName="current">About</NavLink>
		<NavLink as={Link} to="/blog" device={device} activeClassName="current">Blog</NavLink>
		<NavLink as={Link} to="/contact" device={device} activeClassName="current">Contact</NavLink>
	</Links>
)

const NavLink = styled.div`
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
