import React, { Component } from 'react'

import SingleWork from '../SingleWork'

import Uboux from '../../../assets/images/work/behance/uboux.jpg'
import Catchit from '../../../assets/images/work/behance/catchit.jpg'
import Luca from '../../../assets/images/work/behance/luca.jpg'

export default class Behance extends Component {
    state = {
        projects: [
            {
                id: 0,
                title: 'Uboux Logo',
                image: `${Uboux}`,
                link: 'https://www.behance.net/gallery/43074239/UBOUX-Logo-identity'
            },
            {
                id: 1,
                title: 'Catch it 1.0',
                image: `${Catchit}`,
                link: 'https://play.google.com/store/apps/details?id=com.smakosh.atchit'
            },
            {
                id: 2,
                title: 'Luca-steeb.com',
                image: `${Luca}`,
                link: 'https://luca-steeb.com'
            }
        ]
    }
    render () {
        return (
            <div
                style={{
                    background: '#fff',
                    marginBottom: '1.45rem',
                    padding: '1rem 1rem 0 1rem'
                }}
            >   
                <h2>Shared on Behance</h2>
                <div className="work">
                    {
                        this.state.projects.map((project) => {
                            return <SingleWork
                                        key={project.id}
                                        id={project.id}
                                        title={project.title}
                                        image={project.image}
                                        link={project.link}
                                    />
                        })
                    }
                    <a 
                        href="https://www.behance.net/ismail16sm9991" 
                        target="_blank"
                        style={{
                            textDecoration: 'none',
                            color: 'rgb(0, 119, 255)',
                            fontSize: '1.5em'
                        }}
                        className="more"
                    >
                        See more
                    </a>
                </div>
            </div>
        )
    }
}