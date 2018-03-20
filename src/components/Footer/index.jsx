import React, { Component } from 'react'
import Link from 'gatsby-link'

import Copyrights from './Copyrights'
import './style.scss'

export default class Footer extends Component {
    state = {
        links: [
            {
                id: 0,
                pages: [
                    'Home',
                    'About',
                ]
            },
            {
                id: 1,
                pages: [
                    'Contact'
                ]
            },
            {
                id: 2,
                pages: [
                    'Blog'
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
                            this.state.links.map(item => (
                                <ul key={item.id} style={{ listStyle: 'none' }}>
                                    {
                                        item.pages.map(page => (
                                            <li key={page}>
                                                <Link
                                                    to={`/${page}`}
                                                    style={{ color: '#fff' }}
                                                >
                                                    {page}
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