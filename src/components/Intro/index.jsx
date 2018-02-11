import React from 'react'
import Link from 'gatsby-link'

const Intro = () => (
    <div
        style={{
        background: 'white'
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
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
                style={{
                color: 'white',
                textDecoration: 'none',
                padding: '.9rem 1.4rem',
                background: '#00c3ff',
                borderRadius: '.3rem',
                boxShadow: 'rgba(0, 196, 255, 0.9) 0px 13px 19px -6px'
                }}
            >
                View resume
            </Link>
        </div>
    </div>
)

export default Intro
