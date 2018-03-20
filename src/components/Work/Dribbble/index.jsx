import React, { Component } from 'react'

import SingleWork from '../SingleWork'

export default class Dribbble extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shots: [
                {
                    id: 0,
                    title: 'Planets UI',
                    image: this.props.firstImg,
                    link: 'https://dribbble.com/shots/3428200-Daily-UI-10'
                },
                {
                    id: 1,
                    title: 'Post UI',
                    image: this.props.secondImg,
                    link: 'https://dribbble.com/shots/3344087-Daily-UI-06'
                },
                {
                    id: 2,
                    title: 'Futuristic Todo',
                    image: this.props.thirdImg,
                    link: 'https://dribbble.com/shots/3829349-Daily-UI-22'
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
                    {
                        this.state.shots.map((shot) => (
                            <SingleWork
                                key={shot.id}
                                id={shot.id}
                                title={shot.title}
                                image={shot.image}
                                link={shot.link}
                            />
                        ))
                    }
                    <a 
                        href="https://www.behance.net/ismail16sm9991" 
                        target="_blank"
                        style={{
                            backgroundColor: '#ea4c89'
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