import React, { Component } from 'react'

import SingleWork from '../SingleWork'

export default class Dribbble extends Component {
    state = {
        shots: [
            {
                id: 0,
                title: 'Planets UI',
                image: 'https://cdn.dribbble.com/users/1236180/screenshots/3428200/shot13.jpg',
                link: 'https://dribbble.com/shots/3428200-Daily-UI-10'
            },
            {
                id: 1,
                title: 'Post UI',
                image: 'https://cdn.dribbble.com/users/1236180/screenshots/3344087/shot8.jpg',
                link: 'https://dribbble.com/shots/3344087-Daily-UI-06'
            },
            {
                id: 2,
                title: 'Futuristic Todo',
                image: 'https://cdn.dribbble.com/users/1236180/screenshots/3829349/daily_ui_22_dribbble.jpg',
                link: 'https://dribbble.com/shots/3829349-Daily-UI-22'
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
                <h2>Shared on Dribbble</h2>
                <div className="work">
                    {
                        this.state.shots.map((shot) => {
                            return <SingleWork
                                        key={shot.id}
                                        id={shot.id}
                                        title={shot.title}
                                        image={shot.image}
                                        link={shot.link}
                                    />
                        })
                    }
                    <a 
                        href="https://www.behance.net/ismail16sm9991" 
                        target="_blank"
                        style={{
                            textDecoration: 'none',
                            color: '#ea4c89',
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