import React from 'react'
import { Link } from 'gatsby'
import { Container, Logo, ThemeContext } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, BrandLogo, Brand } from './styles'

const Navbar = () => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<Wrapper as={Container}>
				<Brand as={Link} theme={theme} to="/">
					<BrandLogo
						as={Logo}
						color={theme === 'dark' ? '#fff' : '#212121'}
						strokeWidth="2"
					/>
					Smakosh
				</Brand>
				<NavbarLinks desktop />
			</Wrapper>
		)}
	</ThemeContext.Consumer>
)

export default Navbar
