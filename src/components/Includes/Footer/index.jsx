import React, { Component } from 'react'
import Link from 'gatsby-link'

import { Container, Logo } from '../../common'
import Copyrights from './Copyrights'
import './style.scss'

const Footer = () =>
    <footer>
        <div className="footer-full gradient-blue">
            <Container className="footer">
                    <ul>
                        <li>
                            <Link className="brand-footer" to="/">
                                <Logo
                                    className="logo-footer"
                                    color="#fff" 
                                    strokeWidth="2"
                                /> Smakosh
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                    <ul>
                        <li><a target="_blank" href="https://twitter.com/smakosh">Twitter</a></li>
                        <li><a target="_blank" href="https://github.com/smakosh">Github</a></li>
                        <li><a target="_blank" href="https://instagram.com/smakosh19">Instagram</a></li>
                    </ul>
            </Container>
        </div>
        <Copyrights />
    </footer>

export { Footer }