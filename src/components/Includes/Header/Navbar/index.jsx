import React from 'react'
import Link from 'gatsby-link'
import { Container, Logo } from '../../../common'
import './style.scss'

const Navbar = ({ logo }) =>
    <Container className="nav">
        <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', color: '#212121' }}>
            <Logo
                className="logo"
                color="#212121" 
                strokeWidth="2"
            /> Smakosh
            </Link>
        </div>
        <div className="links">
            <Link to="/" activeClassName="current" exact={true}>Home</Link>
            <Link to="/about" activeClassName="current" >About</Link>
            <Link to="/blog" activeClassName="current" >Blog</Link>
            <Link to="/contact" activeClassName="current" >Contact</Link>
        </div>
    </Container>

export default Navbar