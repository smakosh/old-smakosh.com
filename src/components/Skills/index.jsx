import React from 'react'
import Skill from './Skill'

import Graphic from '../../assets/images/skills/graphic.svg'
import UserInterface from '../../assets/images/skills/ui.svg'
import Webdev from '../../assets/images/skills/webdev.svg'

const Skills = () => (
    <div
        style={{
            marginBottom: '1.45rem',
            color: 'white',
            padding: '6rem 1rem 2rem 1rem'
        }}
        className="clip gradient-blue"
    >   
        <div 
            style={{
                margin: '0 auto',
                maxWidth: 960
            }}
        >
            <h2>
                Skills
            </h2>
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '2rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Skill
                    title="Graphic Design"
                    icon={Graphic}
                />
                <Skill
                    title="UI/UX Design"
                    icon={UserInterface}
                />
                <Skill
                    title="Front end development"
                    icon={Webdev}
                />
            </div>
        </div>
    </div>
)

export default Skills