import React from 'react'
import SocialIcon from './SocialIcon'
import twitter from '../../../../static/social/twitter.svg'
import unsplash from '../../../../static/social/unsplash.svg'
import instagram from '../../../../static/social/instagram.svg'
import linkedin from '../../../../static/social/linkedin.svg'
import dribbble from '../../../../static/creative/dribbble.svg'
import behance from '../../../../static/creative/behance.svg'
import github from '../../../../static/creative/github.svg'
import medium from '../../../../static/creative/medium.svg'
import youtube from '../../../../static/creative/youtube.svg'
import codepen from '../../../../static/creative/codepen.svg'

import './style.scss'

const Socials = () => {
    const socials = [
        {
            id: 0,
            name: 'twitter',
            icon: twitter,
            link: 'https://twitter.com/smakosh'
        },
        {
            id: 1,
            name: 'unsplash',
            icon: unsplash,
            link: 'http://unsplash.com/smakosh'
        },
        {
            id: 2,
            name: 'instagram',
            icon: instagram,
            link: 'https://www.instagram.com/smakosh19'
        },
        {
            id: 3,
            name: 'linkedin',
            icon: linkedin,
            link: 'https://www.linkedin.com/in/ismail-ghallou-630149122'
        }
    ]
    const creatives = [
        {
            id: 0,
            name: 'dribbble',
            icon: dribbble,
            link: 'https://dribbble.com/smakosh'
        },
        {
            id: 1,
            name: 'behance',
            icon: behance,
            link: 'https://www.behance.net/ismail16sm9991'
        },
        {
            id: 2,
            name: 'github',
            icon: github,
            link: 'https://github.com/smakosh'
        },
        {
            id: 3,
            name: 'medium',
            icon: medium,
            link: 'https://medium.com/@ismailghallou'
        },
        {
            id: 4,
            name: 'youtube',
            icon: youtube,
            link: 'youtube.com/user/smakoshthegamer'
        },
        {
            id: 5,
            name: 'codepen',
            icon: codepen,
            link: 'https://codepen.io/Smakosh'
        }
    ]
    return (
        <div style={{ padding: '2rem 0' }}>
            <h2 style={{ marginBottom: '3rem' }}>
                Or somewhere else on the web
            </h2>
            <div className="social-creative">
                { socials.map(social => <SocialIcon key={social.id} {...social} />) }
            </div>
            <div className="social-creative">
                { creatives.map(creative => <SocialIcon key={creative.id} {...creative} />) }
            </div>
        </div>
    )
}

export { Socials } 