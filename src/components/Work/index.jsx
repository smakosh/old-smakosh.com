import React from 'react'

import Behance from './Behance'
import Dribbble from './Dribbble'
import Github from './Github'

import './style.scss'

const Projects = () => (
    <div
        style={{
            background: 'white',
            margin: '0 auto',
            maxWidth: 1200
        }}
    >   
        <Behance />
        <Dribbble />
        <Github />
    </div>
)

export default Projects