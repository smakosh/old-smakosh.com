import React from 'react'

export const Linkedin = ({
	width = '12',
	height = '14',
	color = '#fff',
	className = '',
}) => (
	<svg
		className={className}
		width={width}
		height={height}
		viewBox="0 0 14 14"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill={color}
			d="M2.727 4.883v7.742H.149V4.883h2.578zm.164-2.391q.008.57-.395.953t-1.059.383h-.016q-.641 0-1.031-.383t-.391-.953q0-.578.402-.957t1.051-.379 1.039.379.398.957zM12 8.187v4.437H9.43V8.483q0-.82-.316-1.285t-.988-.465q-.492 0-.824.27t-.496.668q-.086.234-.086.633v4.32H4.15q.016-3.117.016-5.055t-.008-2.313l-.008-.375h2.57v1.125h-.016q.156-.25.32-.438t.441-.406.68-.34.895-.121q1.336 0 2.148.887t.813 2.598z"
		/>
	</svg>
)
