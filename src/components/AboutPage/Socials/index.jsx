import React from 'react'
import { ThemeContext } from 'Common'

// Dark icons
import twitter from 'Static/social/twitter.svg'
import unsplash from 'Static/social/unsplash.svg'
import instagram from 'Static/social/instagram.svg'
import linkedin from 'Static/social/linkedin.svg'
import dribbble from 'Static/creative/dribbble.svg'
import behance from 'Static/creative/behance.svg'
import github from 'Static/creative/github.svg'
import medium from 'Static/creative/medium.svg'
import youtube from 'Static/creative/youtube.svg'
import codepen from 'Static/creative/codepen.svg'

// Light icons
import twitterWhite from 'Static/social/twitter-white.svg'
import unsplashWhite from 'Static/social/unsplash-white.svg'
import instagramWhite from 'Static/social/instagram-white.svg'
import linkedinWhite from 'Static/social/linkedin-white.svg'
import dribbbleWhite from 'Static/creative/dribbble-white.svg'
import behanceWhite from 'Static/creative/behance-white.svg'
import githubWhite from 'Static/creative/github-white.svg'
import mediumWhite from 'Static/creative/medium-white.svg'
import youtubeWhite from 'Static/creative/youtube-white.svg'
import codepenWhite from 'Static/creative/codepen-white.svg'
import SocialIcon from './SocialIcon'

import { Wrapper, Title, Social } from './styles'

const Socials = () => (
	<ThemeContext.Consumer>
		{({ theme }) => {
			const socials = [
				{
					id: 0,
					name: 'twitter',
					icon: theme === 'dark' ? twitterWhite : twitter,
					link: 'https://twitter.com/smakosh'
				},
				{
					id: 1,
					name: 'unsplash',
					icon: theme === 'dark' ? unsplashWhite : unsplash,
					link: 'http://unsplash.com/smakosh'
				},
				{
					id: 2,
					name: 'instagram',
					icon: theme === 'dark' ? instagramWhite : instagram,
					link: 'https://www.instagram.com/smakosh19'
				},
				{
					id: 3,
					name: 'linkedin',
					icon: theme === 'dark' ? linkedinWhite : linkedin,
					link: 'https://www.linkedin.com/in/ismail-ghallou-630149122'
				}
			]
			const creatives = [
				{
					id: 0,
					name: 'dribbble',
					icon: theme === 'dark' ? dribbbleWhite : dribbble,
					link: 'https://dribbble.com/smakosh'
				},
				{
					id: 1,
					name: 'behance',
					icon: theme === 'dark' ? behanceWhite : behance,
					link: 'https://www.behance.net/ismail16sm9991'
				},
				{
					id: 2,
					name: 'github',
					icon: theme === 'dark' ? githubWhite : github,
					link: 'https://github.com/smakosh'
				},
				{
					id: 3,
					name: 'medium',
					icon: theme === 'dark' ? mediumWhite : medium,
					link: 'https://medium.com/@ismailghallou'
				},
				{
					id: 4,
					name: 'youtube',
					icon: theme === 'dark' ? youtubeWhite : youtube,
					link: 'https://youtube.com/user/smakoshthegamer'
				},
				{
					id: 5,
					name: 'codepen',
					icon: theme === 'dark' ? codepenWhite : codepen,
					link: 'https://codepen.io/Smakosh'
				}
			]
			return (
				<Wrapper>
					<Title theme={theme}>Or somewhere else on the web</Title>
					<Social>
						{ socials.map(social => <SocialIcon key={social.id} {...social} />) }
					</Social>
					<Social>
						{ creatives.map(creative => <SocialIcon key={creative.id} {...creative} />) }
					</Social>
				</Wrapper>
			)
		}}
	</ThemeContext.Consumer>
)

export { Socials }
