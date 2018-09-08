import React from 'react'
import styled from 'styled-components'

const SocialIcon = ({ name, link, icon }) =>  (
	<div>
		<a href={link} rel="noopener noreferrer" target="_blank">
			<SocialStyled className="grow" src={icon} alt={name} />
		</a>
	</div>
)

const SocialStyled = styled.img`
	height: 2rem;
	@media screen and (max-width: 680px) {
		height: 1rem;
	}
`

export default SocialIcon
