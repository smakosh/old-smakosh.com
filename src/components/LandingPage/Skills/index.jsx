import React from 'react'

import { Container } from '../../common'
import Skill from './Skill'
import Graphic from '../../../../static/skills/graphic.svg'
import Uix from '../../../../static/skills/ui.svg'
import WebDev from '../../../../static/skills/webdev.svg'
import './style.scss'

const Skills = ({firstImg, secondImg, thirdImg}) => {
    const services = [
        {
            title: 'Graphic Design',
            icon: `${Graphic}`
        },
        {
            title: 'UI/UX Design',
            icon: `${Uix}`
        },
        {
            title: 'Front end development',
            icon: `${WebDev}`
        },
    ]
    return (
        <div className="clip gradient-blue services">   
            <Container>
                <h2>Skills</h2>
                <div className="skill-container">
                    {services.map((service, index) => <Skill key={index} {...service} />)}
                </div>
            </Container>
        </div>
    )
}

export { Skills }