import React from 'react'
import './styles.scss'

const More = ({ link, color, children }) => (
	<a href={link} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: color }} className="more">
		{ children }
        See more
	</a>
)

export { More }
