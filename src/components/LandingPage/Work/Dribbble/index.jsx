import React from 'react'
import { Card, More, DribbbleIcon } from '../../../common'

const Dribbble = ({ firstImg, secondImg, thirdImg }) => {
    const shots = [
        {
            id: 0,
            title: 'Planets UI',
            image: firstImg,
            link: 'https://dribbble.com/shots/3428200-Daily-UI-10',
            description: 'An UI that got kind of an award on Uplabs'
        },
        {
            id: 1,
            title: 'Post UI',
            image: secondImg,
            link: 'https://dribbble.com/shots/3344087-Daily-UI-06',
            description: 'Part of a daily UI challenge I was having'
        },
        {
            id: 2,
            title: 'Futuristic Todo',
            image: thirdImg,
            link: 'https://dribbble.com/shots/3829349-Daily-UI-22',
            description: 'Testing cssGrid for the first time, so I designed this'
        }
    ]
    return (
        <div style={{ background: '#fff', marginBottom: '2.5rem' }}>   
            <h3>Shared on Dribbble</h3>
            <div className="work">
                {shots.map(shot => <Card key={shot.id} {...shot} />)}
                <More link="https://dribbble.com/smakosh" color="#ea4c89">
                    <DribbbleIcon className="mr2" />
                </More>
            </div>
        </div>
    )
}

export default Dribbble