import React, { Component } from 'react'

import SingleWork from '../SingleWork'

export default class Behance extends Component {
    state = {
        projects: [
            {
                id: 0,
                title: 'Ubox Logo',
                image: 'https://cdn.dribbble.com/users/1236180/screenshots/3301042/shot3.jpg',
                link: 'https://www.behance.net/gallery/43074239/UBOUX-Logo-identity'
            },
            {
                id: 1,
                title: 'Catch it 1.0',
                image: 'https://cdn.dribbble.com/users/1236180/screenshots/3301066/shot4.jpg',
                link: 'https://play.google.com/store/apps/details?id=com.smakosh.atchit'
            },
            {
                id: 2,
                title: 'Luca-steeb.com',
                image: 'https://cdn.dribbble.com/users/1236180/screenshots/3300991/shot.jpg',
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
                <h2>Shared on Behance.net</h2>
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
                            fontSize: '1.5em',
                            padding: '3rem 0 0 0.5rem'
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