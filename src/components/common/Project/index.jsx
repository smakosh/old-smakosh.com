import React from 'react'
import styled from 'styled-components'
import { Card, More } from '../../common'

const Project = ({ title, projects, link, color, icon, svg }) => (
	<Wrapper>
		<h3>{title}</h3>
		<Work>
			{projects.map(project => <Card key={project.id} {...project} svg={svg} />)}
			<More link={link} color={color}>
				<Icon as={icon} />
			</More>
		</Work>
	</Wrapper>
)

const Wrapper = styled.div`
    background: #fff;
    margin-bottom: 2.5rem;
`

const Work = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 4fr);
    grid-gap: 1.2rem;
    align-items: center;

    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 680px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 4rem;
    }
`

const Icon = styled.div`
    margin-right: 1rem;
`

export { Project }
