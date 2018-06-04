import React from 'react'
import Link from 'gatsby-link'
import { Container, Logo, Twitter, GithubIcon, Instagram, Unsplash, Linkedin } from '../../common'
import Copyrights from './Copyrights'
import './style.scss'

const Footer = () => (
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
                        <li>
                            Follow me on
                        </li>
                        <li>
                            <a target="_blank" className="social" href="https://twitter.com/smakosh">
                                <Twitter className="grow" width="24" height="24" />
                            </a>
                            <a target="_blank" className="social" href="https://github.com/smakosh">
                                <GithubIcon className="grow" width="24" height="24" />
                            </a>
                            <a target="_blank" className="social" href="https://instagram.com/smakosh19">
                                <Instagram className="grow" width="24" height="24" />
                            </a>
                            <a target="_blank" className="social" href="https://unsplash.com/smakosh">
                                <Unsplash className="grow" width="24" height="24" />
                            </a>
                            <a target="_blank" href="https://linkedin.com/in/ismail-ghallou-630149122">
                                <Linkedin className="grow" width="24" height="24" />
                            </a>
                        </li>
                    </ul>
            </Container>
        </div>
        <Copyrights />
    </footer>
)

export default Footer