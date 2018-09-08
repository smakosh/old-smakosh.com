import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Container, Logo, Twitter, GithubIcon, Instagram, Unsplash, Linkedin } from '../../common'
import Copyrights from './Copyrights'

const Footer = () => {
	const social = [
		{
			id: 0,
			name: 'Twitter',
			link: 'https://twitter.com/smakosh',
			icon: Twitter,
			last: false
		},
		{
			id: 1,
			name: 'Github',
			link: 'https://github.com/smakosh',
			icon: GithubIcon,
			last: false
		},
		{
			id: 2,
			name: 'Instagram',
			link: 'https://instagram.com/smakosh19',
			icon: Instagram,
			last: false
		},
		{
			id: 3,
			name: 'Unsplash',
			link: 'https://unsplash.com/smakosh',
			icon: Unsplash,
			last: false
		},
		{
			id: 4,
			name: 'Linkedin',
			link: 'https://linkedin.com/in/ismail-ghallou-630149122',
			icon: Linkedin,
			last: false
		}
	]
	return (
		<FooterContainer>
			<FullContainer>
				<Container footer>
					<List>
						<li>
							<Brand as={Link} to="/">
								<StyledLogo
									as={Logo}
									color="#fff"
									strokeWidth="2"
								/> Smakosh
							</Brand>
						</li>
					</List>
					<List>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/contact">Contact</Link></li>
						<li><Link to="/blog">Blog</Link></li>
					</List>
					<List>
						<li>Follow me on</li>
						<li>
							{social.map(({ id, name, link, icon, last }) => (
								<Social key={id} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`} href={link} last={last}>
									<Grow as={icon} width="24" height="24" />
								</Social>
							))}
						</li>
					</List>
				</Container>
			</FullContainer>
			<Copyrights />
		</FooterContainer>
	)
}

const FooterContainer = styled.footer`
	margin-top: 6rem;
`

const FullContainer = styled.div`
	width: 100%;
	padding: 8rem 0 2rem 0;
	color: #fff;
	background-image: linear-gradient(10deg, #0072ff 0%, #00c6ff 100%);
`

const List = styled.ul`
	list-style: none;
	align-self: center;
	a {
		color: #fff;
	}
`

const Brand = styled.div`
	display: flex;
	align-items: center;
`

const StyledLogo = styled.div`
	transition: 0.5s;
	height: 4rem;
	width: 4rem;
	margin-right: 1rem;
	margin-bottom: 0;
	&:hover  {
		opacity: 0.7;
		transition: 0.5s;
		transform: rotate(360deg);
	}
`

const Social = styled.a`
	margin-right: 1rem;
	${({ last }) => last && `
		margin-right: unset;
	`}
`

const Grow = styled.div`
	cursor: pointer;
	transition: all .2s ease-in-out;
	&:hover  {
		transform: scale(1.1);
		transition: all .2s ease-in-out;
	}
`

export default Footer
