import React from 'react'
import { Card, More, BehanceIcon } from '../../../common'

const Behance = ({firstImg, secondImg, thirdImg}) => {
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
        <div style={{ background: '#fff', marginBottom: '2.5rem' }}>   
            <h3>Shared on Behance</h3>
            <div className="work">
                {projects.map(project => <Card key={project.id} {...project} />)}
                <More link="https://www.behance.net/ismail16sm9991" color="rgb(0, 119, 255)">
                    <BehanceIcon className="mr2" />
                </More>
            </div>
        </div>
    )
}

export default Behance