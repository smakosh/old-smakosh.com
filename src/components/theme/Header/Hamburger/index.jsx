import React from 'react'
import { ThemeContext } from 'Common';
import { HamburgerIcon, Bar } from './styles'

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
