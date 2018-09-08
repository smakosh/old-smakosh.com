import React from 'react'
import styled from 'styled-components'

const Skill = ({ icon, title }) => (
	<SingleSkill style={{ textAlign: 'center' }}>
		<Grow src={icon} alt={title} />
		<Title style={{ fontWeight: 'normal' }}>{title}</Title>
	</SingleSkill>
)

const SingleSkill = styled.div`
	text-align: center;
`

const Grow = styled.img`
	cursor: pointer;
	transition: all .2s ease-in-out;
	&:hover  {
		transform: scale(1.1);
		transition: all .2s ease-in-out;
	}
`

const Title = styled.h4`
	font-weight: normal;
`

export default Skill
