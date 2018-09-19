import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Container, Logo } from '../../../common'
import NavbarLinks from '../NavbarLinks'

const Navbar = () => (
	<Container nav>
		<Brand to="/">
			<BrandLogo as={Logo} color="#212121" strokeWidth="2" />
			Smakosh
		</Brand>
		<NavbarLinks device="desktop" />
	</Container>
)

const Brand = styled(Link)`
	display: flex;
	align-items: center;
	color: #212121;
`

const BrandLogo = styled.div`
	transition: 0.5s;
	height: 2.8rem;
	width: 2.8rem;
	margin-bottom: 0;
	margin-right: .5rem;
	&:hover  {
		opacity: 0.7;
		transition: 0.5s;
		transform: rotate(360deg);
	}
`

export default Navbar
