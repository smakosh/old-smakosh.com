import React from 'react'
import { Link } from 'gatsby'
import { SmallerContainer, GithubIcon, ThemeContext } from '../../../common'
import gatsbyIcon from '../../../../../static/footer/gatsby.svg'
import netlifyIcon from '../../../../../static/footer/netlify.svg'
import { Links, Item } from './styles'

const Copyrights = () => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<SmallerContainer tc copyrights theme={theme}>
				<Links>
            © <Item as={Link} to="/">Smakosh</Item> 2016-{`${(new Date()).getFullYear()} `}
            Built with
					<a href="https://www.gatsbyjs.org" rel="noopener noreferrer" target="_blank">
						<Item src={gatsbyIcon} img alt="Gatssby js" />
					</a>
			Open sourced on
					<a href="https://github.com/smakosh/smakosh.com" rel="noopener noreferrer" target="_blank">
						<Item as={GithubIcon} img width="24" height="24" color="#00" />
					</a>
			and deployed on
					<a href="https://www.netlify.com" rel="noopener noreferrer" target="_blank">
						<Item src={netlifyIcon} img alt="Netlify" />
					</a>
				</Links>
			</SmallerContainer>
		)}
	</ThemeContext.Consumer>
)

export default Copyrights
