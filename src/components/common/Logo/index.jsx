import React from 'react'

export const Logo = ({ color, className, strokeWidth }) => (
	<svg
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 60 60"
	>
		<path
			fill="none"
			stroke={color}
			strokeWidth={strokeWidth}
			d="M52.3 14.8a27 27 0 0 1-37.4 38.1L36 38.6m16.3-23.8L7.8 45.3A27 27 0 0 1 42.4 5.2"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit="10"
		/>
	</svg>
)
