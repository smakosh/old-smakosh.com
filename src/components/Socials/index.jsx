import React, { Component } from 'react'

// social
import twitter from '../../../static/social/twitter.svg'
import facebook from '../../../static/social/facebook.svg'
import instagram from '../../../static/social/instagram.svg'
import linkedin from '../../../static/social/linkedin.svg'

// creative
import dribbble from '../../../static/creative/dribbble.svg'
import behance from '../../../static/creative/behance.svg'
import github from '../../../static/creative/github.svg'
import medium from '../../../static/creative/medium.svg'

import youtube from '../../../static/creative/youtube.svg'
import codepen from '../../../static/creative/codepen.svg'

import './style.scss'

export default class Socials extends Component {
    state = {
        socials: [
            {
                id: 0,
                name: `${twitter}`,
                link: 'https://twitter.com/smakosh'
            },
            {
                id: 1,
                name: `${facebook}`,
                link: 'https://www.facebook.com/Ismailghallou'
            },
            {
                id: 2,
                name: `${instagram}`,
                link: 'https://www.instagram.com/smakosh19'
            },
            {
                id: 3,
                name: `${linkedin}`,
                link: 'https://www.linkedin.com/in/ismail-ghallou-630149122'
            }
        ],
    creatives: [
            {
                id: 0,
                name: `${dribbble}`,
                link: 'https://dribbble.com/smakosh'
            },
            {
                id: 1,
                name: `${behance}`,
                link: 'https://www.behance.net/ismail16sm9991'
            },
            {
                id: 2,
                name: `${github}`,
                link: 'https://github.com/smakosh'
            },
            {
                id: 3,
                name: `${medium}`,
                link: 'https://medium.com/@ismailghallou'
            },
            {
                id: 4,
                name: `${youtube}`,
                link: 'youtube.com/user/smakoshthegamer'
            },
            {
                id: 5,
                name: `${codepen}`,
                link: 'https://codepen.io/Smakosh'
            }
        ]
    }
    render() {
        return (
            <div style={{ padding: '2rem 0' }}>
                <h2 style={{ marginBottom: '3rem' }}>
                    Or somewhere else on the web
                </h2>
                <div className="social-creative" style={{ textAlign: 'center' }}>
                    {
                        this.state.socials.map(social => {
                            return (
                                <div className="card-social" key={social.id}>
                                    <a
                                        href={social.link}
                                        target="_blank"
                                    >
                                        <img
                                            className="grow"
                                            src={social.name}
                                            alt={social.name}
                                        />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="social-creative" style={{ textAlign: 'center' }}>
                    {
                        this.state.creatives.map(creative => {
                            return (
                                <div className="card-social" key={creative.id}>
                                    <a
                                        href={creative.link}
                                        target="_blank"
                                    >
                                        <img
                                            className="grow"
                                            src={creative.name}
                                            alt={creative.name}
                                        />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}