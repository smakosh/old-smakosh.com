import React from 'react'
import { Link } from 'gatsby'
import { ThemeContext } from 'Common'
import night from 'Static/icons/night.svg'
import day from 'Static/icons/day.svg'
import { Links, StyledButton } from './styles'

const NavbarLinks = ({ desktop }) => (
	<ThemeContext.Consumer>
		{({ theme, toggleTheme }) => (
			<Links desktop={desktop} theme={theme}>
				<Link to="/" activeClassName="current">Home</Link>
				<Link to="/about" activeClassName="current">About</Link>
				<Link to="/blog" activeClassName="current">Blog</Link>
				<Link to="/contact" activeClassName="current">Contact</Link>
				<StyledButton type="button" onClick={toggleTheme}>
					<img src={theme === 'dark' ? day : night} alt={theme} />
				</StyledButton>
			</Links>
		)}
	</ThemeContext.Consumer>
)

export default NavbarLinks
