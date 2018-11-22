import React from 'react'
import { Project, DribbbleIcon } from 'Common'

const Dribbble = ({ firstImg, secondImg, thirdImg }) => {
	const shots = [
		{
			id: 0,
			title: 'Planets UI',
			image: firstImg,
			link: 'https://dribbble.com/shots/3428200-Daily-UI-10',
			description: 'A user interface that received an award on Uplabs'
		},
		{
			id: 1,
			title: 'Post UI',
			image: secondImg,
			link: 'https://dribbble.com/shots/3344087-Daily-UI-06',
			description: 'Part of a daily UI challenge I was doing'
		},
		{
			id: 2,
			title: 'Futuristic Todo',
			image: thirdImg,
			link: 'https://dribbble.com/shots/3829349-Daily-UI-22',
			description: 'Testing cssGrid for the first time, so I designed this'
		}
	]
	return (
		<Project
			icon={DribbbleIcon}
			title="Shared on Dribbble"
			projects={shots}
			link="https://dribbble.com/smakosh"
			color="#ea4c89"
		/>
	)
}

export default Dribbble
