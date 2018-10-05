import React from 'react'
import { SmallerContainer, ThemeContext } from '../../common'
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
					<MagicalButton href="https://docs.google.com/document/d/1yxCORtBMNxj_ukgOxoYQfRu3HTUqjtNXwcMajzcftF8" rel="noopener noreferrer" target="_blank">View resume</MagicalButton>
				</IntroWrapper>
			</SmallerContainer>
		)}
	</ThemeContext.Consumer>
)

export { Intro }
