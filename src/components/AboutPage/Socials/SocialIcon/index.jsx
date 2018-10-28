import React from 'react'
import { SocialStyled } from './styles'

const SocialIcon = ({ name, link, icon }) =>  (
	<div>
		<a href={link} rel="noopener noreferrer" target="_blank">
			<SocialStyled
				src={icon}
				alt={name}
			/>
		</a>
	</div>
)

export default SocialIcon
