import React from 'react'
import { HamburgerIcon, Bar } from './styles'
import { ThemeContext } from '../../../common';

const Hamburger = ({ sidebar, toggle, isHomePage }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<HamburgerIcon isHomePage={isHomePage} sidebar={sidebar} onClick={toggle}>
				<Bar top sidebar={sidebar} theme={theme} />
				<Bar mid sidebar={sidebar} theme={theme} />
				<Bar bottom sidebar={sidebar} theme={theme} />
			</HamburgerIcon>
		)}
	</ThemeContext.Consumer>
)

export default Hamburger
