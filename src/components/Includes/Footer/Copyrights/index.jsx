import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { SmallerContainer, GithubIcon } from '../../../common'
import gatsbyIcon from '../../../../../static/footer/gatsby.svg'
import netlifyIcon from '../../../../../static/footer/netlify.svg'

const Copyrights = () => (
	<SmallerContainer tc copyrights>
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
)

const Links = styled.div`
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`

const Item = styled.img`
	margin: 0 .2rem;
	${({ img }) => img && `
		position: relative;
		top: .15rem;
	`}
`

export default Copyrights
