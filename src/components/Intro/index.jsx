import React from 'react'
import Link from 'gatsby-link'

const Intro = () => (
    <div
        style={{
        background: 'white',
        marginBottom: '1.45rem',
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '4rem 1.0875rem',
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
                padding: '1rem 2rem',
                background: '#00c3ff',
                borderRadius: '.3rem'
                }}
            >
                View resume
            </Link>
        </div>
    </div>
)

export default Intro
