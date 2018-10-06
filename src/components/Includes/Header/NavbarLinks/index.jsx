import React from 'react'
import { Link } from 'gatsby'
import { ThemeContext } from '../../../common'
import night from '../../../../../static/icons/night.svg'
import day from '../../../../../static/icons/day.svg'
import { NavLink, Links, StyledButton } from './styles'

const NavbarLinks = ({ device }) => (
	<ThemeContext.Consumer>
		{({ theme, toggleTheme }) => (
			<Links device={device}>
				<NavLink as={Link} theme={theme} to="/" device={device} activeClassName="current">Home</NavLink>
				<NavLink as={Link} theme={theme} to="/about" device={device} activeClassName="current">About</NavLink>
				<NavLink as={Link} theme={theme} to="/blog" device={device} activeClassName="current">Blog</NavLink>
				<NavLink as={Link} theme={theme} to="/contact" device={device} activeClassName="current">Contact</NavLink>
				<StyledButton type="button" onClick={toggleTheme}>
					<img src={theme === 'dark' ? day : night} alt={theme} />
				</StyledButton>
			</Links>
		)}
	</ThemeContext.Consumer>
)

export default NavbarLinks
