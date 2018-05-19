import React, { Component } from 'react'

import BehanceIcon from '../../../../../static/creative/behance-white.svg'

import { Card, More } from '../../../common'

export default class Behance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    id: 0,
                    title: 'Uboux Logo',
                    image: this.props.firstImg,
                    link: 'https://www.behance.net/gallery/43074239/UBOUX-Logo-identity',
                    description: 'A logo I designed for a jewelry store'
                },
                {
                    id: 1,
                    title: 'Catch it 1.0',
                    image: this.props.secondImg,
                    link: 'https://play.google.com/store/apps/details?id=com.smakosh.atchit',
                    description: 'An android game I made with BuildBox'
                },
                {
                    id: 2,
                    title: 'Luca-steeb.com',
                    image: this.props.thirdImg,
                    link: 'https://luca-steeb.com',
                    description: 'A website I designed and coded for Luca Steeb'
                }
            ]
        }
    }
    render() {
        return (
            <div
                style={{
                    background: '#fff',
                    marginBottom: '2.5rem'
                }}
            >   
                <h3>Shared on Behance</h3>
                <div className="work">
                    {this.state.projects.map(project => (
                        <Card
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            image={project.image}
                            link={project.link}
                            description={project.description}
                        />
                    ))}
                    <More link="https://www.behance.net/ismail16sm9991" color="rgb(0, 119, 255)" icon={BehanceIcon} />
                </div>
            </div>
        )
    }
}