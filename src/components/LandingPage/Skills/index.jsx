import React from 'react'

import { Container } from '../../common'
import Skill from './Skill'
import Graphic from '../../../../static/skills/graphic.svg'
import Uix from '../../../../static/skills/ui.svg'
import WebDev from '../../../../static/skills/webdev.svg'
import './style.scss'

const Skills = ({firstImg, secondImg, thirdImg}) => {
    const skills = [
        {
            title: 'Graphic Design',
            icon: `${Graphic}`
        },
        {
            title: 'UI/UX Design',
            icon: `${Uix}`
        },
        {
            title: 'Full stack development',
            icon: `${WebDev}`
        },
    ]
    return (
        <div className="clip gradient-blue services">   
            <Container>
                <h2>Skills</h2>
                <div className="skill-container">
                    {skills.map((skill, index) => <Skill key={index} {...skill} />)}
                </div>
            </Container>
        </div>
    )
}

export { Skills }