import React from 'react'

import './styles.scss'

const Intro = () => (
    <div className="intro">
        <div className="intro-content">
            <h1>I'm Ismail Ghallou</h1>
            <p  
                style={{ 
                    marginBottom: '2rem',
                    color: 'gray'
                }}
            >
                Also known as Smakosh, a self-taught Graphic, UI/UX Designer
                and front end developer.
            </p>
            <a href="https://www.linkedin.com/in/ismail-ghallou-630149122" target="_blank" className="magical-btn">View resume</a>
        </div>
    </div>
)

export { Intro }
