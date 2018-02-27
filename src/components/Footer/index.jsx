import React, { Component } from 'react'
import Link from 'gatsby-link'

import Copyrights from './Copyrights'
import './style.scss'

export default class Footer extends Component {
    state = {
        links: [
            {
                id: 0,
                mehs: [
                    'Home',
                    'About',
                ]
            },
            {
                id: 1,
                mehs: [
                    'Contact',
                    'Privacy',
                ]
            },
            {
                id: 2,
                mehs: [
                    'Blog',
                    'Resume'
                ]
            }
        ]
    }
    render() {
        return (
            <footer>
                <div 
                    style={{
                        width: '100%',
                        padding: '6rem 1rem 2rem 1rem',
                        color: '#fff'
                    }}
                    className="half-clip gradient-blue"
                >
                    <div className="footer">
                        {
                            this.state.links.map((item) => (
                                <ul key={item.id} style={{ listStyle: 'none' }}>
                                    {
                                        item.mehs.map((meh) => (
                                            <li key={meh}>
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
            </footer>
        )
    }
}