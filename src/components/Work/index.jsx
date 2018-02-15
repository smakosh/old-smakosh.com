import React from 'react'

import Behance from './Behance'
import Dribbble from './Dribbble'
import Github from './Github'
import Youtube from './Youtube'

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
        <Youtube />
    </div>
)

export default Projects