import React from 'react'
import { Link } from 'gatsby'
import { SmallerContainer, ThemeContext } from 'Common'
import { MagicalButton, IntroWrapper } from './styles'

const Intro = () => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<SmallerContainer>
				<IntroWrapper theme={theme}>
					<h1>I'm Ismail Ghallou</h1>
					<p>
						Also known as Smakosh, a self-taught Graphic, UI/UX Designer and full stack developer.
					</p>
					<div>
						<MagicalButton href="https://docs.google.com/document/d/1yxCORtBMNxj_ukgOxoYQfRu3HTUqjtNXwcMajzcftF8" rel="noopener noreferrer" target="_blank">View resume</MagicalButton>
						<MagicalButton as={Link} to="/contact">Get In Touch</MagicalButton>
					</div>
				</IntroWrapper>
			</SmallerContainer>
		)}
	</ThemeContext.Consumer>
)

export { Intro }
