import React from 'react'
import styled from 'styled-components'

const SocialIcon = ({ name, link, icon }) =>  (
	<div>
		<a href={link} rel="noopener noreferrer" target="_blank">
			<SocialStyled src={icon} alt={name} />
		</a>
	</div>
)

const SocialStyled = styled.img`
	cursor: pointer;
	transition: all .2s ease-in-out;

	&:hover  {
	transform: scale(1.1);
	transition: all .2s ease-in-out;
	}
	height: 2rem;
	@media screen and (max-width: 680px) {
		height: 1rem;
	}
`

export default SocialIcon
