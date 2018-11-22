import React from 'react'
import { Social } from './styles'

const SocialIcon = ({ name, link, icon, theme }) =>  (
	<Social theme={theme}>
		<a href={link} rel="noopener noreferrer" target="_blank">
			<img
				src={icon}
				alt={name}
			/>
			{name}
		</a>
	</Social>
)

export default SocialIcon
