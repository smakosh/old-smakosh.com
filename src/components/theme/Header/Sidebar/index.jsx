import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import NavbarLinks from '../NavbarLinks'
import { SidebarContainer } from './styles'

export default ({ sidebar, toggle }) => {
	const { theme } = useContext(ThemeContext)
	return (
		<SidebarContainer active={sidebar} onClick={toggle} theme={theme}>
			<NavbarLinks />
		</SidebarContainer>
	)
}
