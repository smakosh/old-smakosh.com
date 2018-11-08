import React from 'react'
import { Link } from 'gatsby'
import { Container, Logo, ThemeContext } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { BrandLogo, Brand } from './styles'

const Navbar = () => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<Container nav>
				<Brand as={Link} theme={theme} to="/">
					<BrandLogo as={Logo} color={theme === 'dark' ? '#fff' : '#212121'} strokeWidth="2" />
					Smakosh
				</Brand>
				<NavbarLinks desktop />
			</Container>
		)}
	</ThemeContext.Consumer>
)

export default Navbar
