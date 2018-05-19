import React, { Component } from 'react'

import DribbbleIcon from '../../../../../static/creative/dribbble-white.svg'

import { Card, More } from '../../../common'

export default class Dribbble extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shots: [
                {
                    id: 0,
                    title: 'Planets UI',
                    image: this.props.firstImg,
                    link: 'https://dribbble.com/shots/3428200-Daily-UI-10',
                    description: 'An UI that got kind of an award on Uplabs'
                },
                {
                    id: 1,
                    title: 'Post UI',
                    image: this.props.secondImg,
                    link: 'https://dribbble.com/shots/3344087-Daily-UI-06',
                    description: 'Part of a daily UI challenge I was having'
                },
                {
                    id: 2,
                    title: 'Futuristic Todo',
                    image: this.props.thirdImg,
                    link: 'https://dribbble.com/shots/3829349-Daily-UI-22',
                    description: 'Testing cssGrid for the first time, so I designed this'
                }
            ]
        }
    }
    render () {
        return (
            <div
                style={{
                    background: '#fff',
                    marginBottom: '2.5rem'
                }}
            >   
                <h3>Shared on Dribbble</h3>
                <div className="work">
                    {this.state.shots.map(shot => (
                        <Card
                            key={shot.id}
                            id={shot.id}
                            title={shot.title}
                            image={shot.image}
                            link={shot.link}
                            description={shot.description}
                        />
                    ))}
                    <More link="https://dribbble.com/smakosh" color="#ea4c89" icon={DribbbleIcon} />
                </div>
            </div>
        )
    }
}