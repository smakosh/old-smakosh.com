import React from 'react'

import { Container } from '../common'
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
    <Container>   
        <h2>Work</h2>
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
    </Container>
)

export default Projects