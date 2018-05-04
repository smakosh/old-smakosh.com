import React from 'react'

import { Container } from '../../common'
import Skill from './Skill'

import Graphic from '../../../../static/skills/graphic.svg'
import Uix from '../../../../static/skills/ui.svg'
import WebDev from '../../../../static/skills/webdev.svg'

import './style.scss'

const Skills = ({firstImg, secondImg, thirdImg}) => (
    <div
        style={{
            marginBottom: '1.45rem',
            color: 'white',
            padding: '8rem 1rem 4rem 1rem'
        }}
        className="clip gradient-blue"
    >   
        <Container>
            <h2>
                Skills
            </h2>
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '2rem 0'
                }}
                className="skill-container"
            >
                <Skill
                    title="Graphic Design"
                    icon={Graphic}
                />
                <Skill
                    title="UI/UX Design"
                    icon={Uix}
                />
                <Skill
                    title="Front end development"
                    icon={WebDev}
                />
            </div>
        </Container>
    </div>
)

export { Skills }