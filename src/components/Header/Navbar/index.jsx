import React from 'react'
import Link from 'gatsby-link'

import Logo from '../../../../static/logo.svg'

import './style.scss'

const Navbar = ({logo}) => (
    <nav>
        <div>
            <Link
            to="/"
            style={{
                display: 'flex',
                alignItems: 'center',
                color: '#212121'
            }}
            >
            <img 
                style={{
                    height: '2.8rem',
                    width: '2.8rem',
                    marginBottom: 0,
                    marginRight: '.5rem'
                }}
                className="logo"
                src={Logo} 
                alt="brand" 
            /> Smakosh
            </Link>
        </div>
        <div className="links">
            <Link to="/" activeClassName="current" exact={true}>Home</Link>
            <Link to="/about" activeClassName="current" >About</Link>
            <Link to="/blog" activeClassName="current" >Blog</Link>
            <Link to="/contact" activeClassName="current" >Contact</Link>
        </div>
    </nav>
)

export default Navbar