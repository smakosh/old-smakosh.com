import React, { Component } from 'react'

import SingleWork from '../SingleWork'

import Planets from '../../../assets/images/work/dribbble/planets.jpg'
import Post from '../../../assets/images/work/dribbble/post.jpg'
import Todo from '../../../assets/images/work/dribbble/todo.jpg'

export default class Dribbble extends Component {
    state = {
        shots: [
            {
                id: 0,
                title: 'Planets UI',
                image: `${Planets}`,
                link: 'https://dribbble.com/shots/3428200-Daily-UI-10'
            },
            {
                id: 1,
                title: 'Post UI',
                image: `${Post}`,
                link: 'https://dribbble.com/shots/3344087-Daily-UI-06'
            },
            {
                id: 2,
                title: 'Futuristic Todo',
                image: `${Todo}`,
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