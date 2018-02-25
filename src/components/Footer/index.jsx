import React, { Component } from 'react'
import Link from 'gatsby-link'

import Copyrights from './Copyrights'

export default class Footer extends Component {
    state = {
        links: [
            {
                id: 0,
                mehs: [
                    'Home',
                    'About',
                    'Blog',
                ]
            },
            {
                id: 1,
                mehs: [
                    'Contact',
                    'Privacy',
                    'Resume',
                ]
            },
            {
                id: 2,
                mehs: [
                    'Behance',
                    'Dribbble',
                    'Github',
                ]
            },
            {
                id: 3,
                mehs: [
                    'Twitter',
                    'Instagram',
                    'Telegram',
                ]
            }
        ]
    }
    render() {
        return (
            <div>
                <div 
                    style={{
                        width: '100%',
                        padding: '6rem 1rem 2rem 1rem',
                        color: '#fff'
                    }}
                    className="half-clip gradient-blue"
                >
                    <div
                        style={{
                            margin: '0 auto',
                            maxWidth: 960,
                            padding: '2rem 0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                            {
                                this.state.links.map((item) => (
                                    <ul key={item.id} style={{ listStyle: 'none' }}>
                                        {
                                            item.mehs.map((meh) => (
                                                <li>
                                                    <Link
                                                        to={`/${meh}`}
                                                        style={{ color: '#fff' }}
                                                    >
                                                        {meh}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                ))
                            }
                    </div>
                </div>
                <Copyrights />
            </div>
        )
    }
}