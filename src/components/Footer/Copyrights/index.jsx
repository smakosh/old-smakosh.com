import React from 'react'
import Link from 'gatsby-link'

const Copyrights = () => (
    <div
        style={{
            padding: '1rem 0',
            margin: '0 auto',
            maxWidth: 960,
            textAlign: 'center'
        }}
    >
        <p style={{ margin: 0 }}>
            © <Link to="/">Smakosh</Link> 2016-2018 
            Built with <a href="https://www.gatsbyjs.org" target="_blank">GatsbyJS</a> and 
            deployed on <a href="https://www.netlify.com" target="_blank">Netlify</a>
        </p>
    </div>
)

export default Copyrights