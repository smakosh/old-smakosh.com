import React, { Component } from 'react'

// social
import twitter from '../../assets/images/social/twitter.svg'
import facebook from '../../assets/images/social/facebook.svg'
import instagram from '../../assets/images/social/instagram.svg'
import linkedin from '../../assets/images/social/linkedin.svg'

// creative
import dribbble from '../../assets/images/creative/dribbble.svg'
import behance from '../../assets/images/creative/behance.svg'
import github from '../../assets/images/creative/github.svg'
import medium from '../../assets/images/creative/medium.svg'

import youtube from '../../assets/images/creative/youtube.svg'
import codepen from '../../assets/images/creative/codepen.svg'
import uplabs from '../../assets/images/creative/uplabs.svg'
import patreon from '../../assets/images/creative/patreon.svg'

export default class Socials extends Social {
    state = {
        socials: [
            {
                id: 0,
                name: 'twitter',
                link: ''
            },
            {
                id: 1,
                name: 'facebook',
                link: ''
            },
            {
                id: 2,
                name: 'instagram',
                link: ''
            },
            {
                id: 3,
                name: 'linkedin',
                link: ''
            }
        ],
    creatives: [
            {
                id: 0,
                name: 'dribbble',
                link: ''
            },
            {
                id: 1,
                name: 'behance',
                link: ''
            },
            {
                id: 2,
                name: 'github',
                link: ''
            },
            {
                id: 3,
                name: 'medium',
                link: ''
            },
            {
                id: 4,
                name: 'youtube',
                link: ''
            },
            {
                id: 5,
                name: 'codepen',
                link: ''
            },
            {
                id: 6,
                name: 'uplabs',
                link: ''
            },
            {
                id: 7,
                name: 'patreon',
                link: ''
            }
        ]
    }
    render() {
        return (
            <div>
                <h2>Anywhere else in the web</h2>
                <div className="work">
                    {
                        this.state.socials.map((social) => {
                            return (
                                <div className="card-social">
                                    <a
                                        href={social.link}
                                        target="_blank"
                                    >
                                        <img
                                            src={social.name}
                                            alt={social.name}
                                        />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="work">
                    {
                        this.state.creatives.map((creative) => {
                            return (
                                <div className="card-social">
                                    <a
                                        href={creative.link}
                                        target="_blank"
                                    >
                                        <img
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