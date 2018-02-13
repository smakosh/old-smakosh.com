import React from 'react'
import Link from 'gatsby-link'

import './intro.scss'

const Intro = () => (
    <div
        style={{
            background: 'white',
            margin: '0 auto',
            maxWidth: 960
        }}
    >
        <div
            style={{
                padding: '3rem 1rem'
            }}
        >
            <h1>
                I'm Ismail Ghallou
            </h1>
            <p  
                style={{ 
                    marginBottom: '2rem',
                    color: 'gray'
                }}
            >
                Also known as Smakosh, a self-taught Graphic, UI/UX Designer
                and full stack developer.
            </p>
            <Link
                to="/"
                
                activeClassName="magical-btn"
            >
                View resume
            </Link>
        </div>
    </div>
)

export default Intro
