import React from 'react'
import styled from 'styled-components'
import { SmallerContainer } from '../../common'

const Intro = () => (
	<SmallerContainer intro>
		<IntroWrapper>
			<h1>I'm Ismail Ghallou</h1>
			<p>Also known as Smakosh, a self-taught Graphic, UI/UX Designer and full stack developer.</p>
			<MagicalButton href="https://docs.google.com/document/d/1yxCORtBMNxj_ukgOxoYQfRu3HTUqjtNXwcMajzcftF8" rel="noopener noreferrer" target="_blank">View resume</MagicalButton>
		</IntroWrapper>
	</SmallerContainer>
)

const MagicalButton = styled.a`
	color: #fff;
	text-decoration: none;
	padding: .9rem 1.4rem;
	background: #00c3ff;
	border-radius: .3rem;
	box-shadow: rgba(0, 196, 255, 0.9) 0px 13px 19px -6px;
	transition: .5s;
	&:hover  {

		box-shadow: 0px 0px 17px 0px rgba(0, 196, 255, 0.36);
		transition: .5s;
	}
`

const IntroWrapper = styled.div`
	padding: 3rem 1rem;
	p {
		color: gray;
		margin-bottom: 2rem;
	}
`

export { Intro }
