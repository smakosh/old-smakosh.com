import React, { useContext } from 'react'
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

export const Socials = () => {
	const { theme } = useContext(ThemeContext)
	const socials = [
		{
			id: 0,
			name: 'Twitter',
			icon: theme === 'dark' ? twitterWhite : twitter,
			link: 'https://twitter.com/smakosh',
		},
		{
			id: 1,
			name: 'Unsplash',
			icon: theme === 'dark' ? unsplashWhite : unsplash,
			link: 'http://unsplash.com/smakosh',
		},
		{
			id: 2,
			name: 'Instagram',
			icon: theme === 'dark' ? instagramWhite : instagram,
			link: 'https://www.instagram.com/smakosh19',
		},
		{
			id: 3,
			name: 'Linkedin',
			icon: theme === 'dark' ? linkedinWhite : linkedin,
			link: 'https://www.linkedin.com/in/ismail-ghallou-630149122',
		},
	]
	const creatives = [
		{
			id: 0,
			name: 'Dribbble',
			icon: theme === 'dark' ? dribbbleWhite : dribbble,
			link: 'https://dribbble.com/smakosh',
		},
		{
			id: 1,
			name: 'Behance',
			icon: theme === 'dark' ? behanceWhite : behance,
			link: 'https://www.behance.net/ismail16sm9991',
		},
		{
			id: 2,
			name: 'Github',
			icon: theme === 'dark' ? githubWhite : github,
			link: 'https://github.com/smakosh',
		},
		{
			id: 3,
			name: 'Medium',
			icon: theme === 'dark' ? mediumWhite : medium,
			link: 'https://medium.com/@ismailghallou',
		},
		{
			id: 4,
			name: 'Youtube',
			icon: theme === 'dark' ? youtubeWhite : youtube,
			link: 'https://youtube.com/user/smakoshthegamer',
		},
		{
			id: 5,
			name: 'Codepen',
			icon: theme === 'dark' ? codepenWhite : codepen,
			link: 'https://codepen.io/Smakosh',
		},
	]
	return (
		<Wrapper>
			<Title theme={theme}>Or somewhere else on the web</Title>
			<Social>
				{socials.map(social => (
					<SocialIcon theme={theme} key={social.id} {...social} />
				))}
			</Social>
			<Social>
				{creatives.map(creative => (
					<SocialIcon theme={theme} key={creative.id} {...creative} />
				))}
			</Social>
		</Wrapper>
	)
}
