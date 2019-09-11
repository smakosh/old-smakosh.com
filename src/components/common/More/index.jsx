import React from 'react'
import { Item } from './styles'

export const More = ({ link, color, children }) => (
	<Item href={link} target="_blank" rel="noopener noreferrer" color={color}>
		{children}
		See more
	</Item>
)
