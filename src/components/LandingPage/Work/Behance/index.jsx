import React from 'react'
import { BehanceIcon, Project } from '../../../common'

const Behance = ({ firstImg, secondImg, thirdImg }) => {
	const projects = [
		{
			id: 0,
			title: 'Uboux Logo',
			image: firstImg,
			link: 'https://www.behance.net/gallery/43074239/UBOUX-Logo-identity',
			description: 'A logo I designed for a jewelry store'
		},
		{
			id: 1,
			title: 'Catch it 1.0',
			image: secondImg,
			link: 'https://play.google.com/store/apps/details?id=com.smakosh.atchit',
			description: 'An android game I made with BuildBox'
		},
		{
			id: 2,
			title: 'Luca-steeb.com',
			image: thirdImg,
			link: 'https://luca-steeb.com',
			description: 'A website I designed and coded for Luca Steeb'
		}
	]
	return (
		<Project
			icon={BehanceIcon}
			title="Shared on Behance"
			projects={projects}
			link="https://www.behance.net/ismail16sm9991"
			color="rgb(0, 119, 255)"
		/>
	)
}

export default Behance
