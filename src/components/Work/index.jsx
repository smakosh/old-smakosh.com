import React from 'react'

import Behance from './Behance'
import Dribbble from './Dribbble'
import Github from './Github'

import './style.scss'

const Projects = ({
    BehancefirstImg,
    BehancesecondImg,
    BehancethirdImg,
    DribbblefirstImg,
    DribbblesecondImg,
    DribbblethirdImg
}) => (
    <div
        style={{
            background: 'white',
            margin: '0 auto',
            maxWidth: 1200
        }}
    >   
        <Behance
            firstImg={BehancefirstImg}
            secondImg={BehancesecondImg}
            thirdImg={BehancethirdImg}
        />
        <Dribbble
            firstImg={DribbblefirstImg}
            secondImg={DribbblesecondImg}
            thirdImg={DribbblethirdImg}
        />
        <Github />
    </div>
)

export default Projects