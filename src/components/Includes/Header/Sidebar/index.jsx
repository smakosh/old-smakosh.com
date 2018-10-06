import React from 'react'
import NavbarLinks from '../NavbarLinks'
import { SidebarContainer } from './styles'
import { ThemeContext } from '../../../common';

const Sidebar = ({ sidebar, toggle }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<SidebarContainer active={sidebar} onClick={toggle} theme={theme}>
				<NavbarLinks device="mobile" />
			</SidebarContainer>
		)}
	</ThemeContext.Consumer>
)

export default Sidebar
