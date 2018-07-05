import React from 'react'

const Skill = ({ icon, title }) => (
	<div style={{ textAlign: 'center' }}>
		<img src={icon} alt={title} className="grow" />
		<h4 style={{ fontWeight: 'normal' }}>{title}</h4>
	</div>
)

export default Skill
