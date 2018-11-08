import React from 'react'
import { ThemeContext } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { SidebarContainer } from './styles'

const Sidebar = ({ sidebar, toggle }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<SidebarContainer active={sidebar} onClick={toggle} theme={theme}>
				<NavbarLinks />
			</SidebarContainer>
		)}
	</ThemeContext.Consumer>
)

export default Sidebar
