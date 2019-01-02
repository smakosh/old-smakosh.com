import React from 'react'
import { withPrefix } from 'gatsby'
import { compose, withStateHandlers, lifecycle } from 'recompose'
import { ThemeContext } from 'Common'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { StyledHeader, Overlay } from './styles'

const HeaderWrapper = ({ sidebar, toggle, isHomePage }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<StyledHeader isHomePage={isHomePage} theme={theme}>
				<Overlay sidebar={sidebar} onClick={toggle} />
				<Navbar />
				<Hamburger isHomePage={isHomePage} sidebar={sidebar} toggle={toggle} />
				<Sidebar sidebar={sidebar} toggle={toggle} />
			</StyledHeader>
		)}
	</ThemeContext.Consumer>
)

const enhance = compose(
	withStateHandlers(() => ({ sidebar: false, isHomePage: false }), {
		toggle: ({ sidebar }) => () => ({ sidebar: !sidebar }),
		setHomePage: ({ isHomePage }) => () => ({ isHomePage: !isHomePage })
	}),
	lifecycle({
		componentDidMount() {
			if (location.pathname === withPrefix('/')) this.props.setHomePage()
		}
	})
)

export const Header = enhance(HeaderWrapper)
