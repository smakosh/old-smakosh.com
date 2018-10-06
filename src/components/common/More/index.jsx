import React from 'react'
import { Item } from './styles'

const More = ({ link, color, children }) => (
	<Item href={link} target="_blank" rel="noopener noreferrer" color={color}>
		{ children }
        See more
	</Item>
)

export { More }
