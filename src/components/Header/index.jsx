import React, { Component } from 'react'
import Link from 'gatsby-link'

import Logo from '../../assets/images/logo.svg'

import './nav.scss'
import './sidebar.scss'

export default class Header extends Component {
  state = {
    sidebar: ''
  }

  toggle() {
    if(this.state.sidebar == 'active') {
      this.setState({sidebar: ''})
    } else {
      this.setState({sidebar: 'active'})
    }
  }

  render() {
    return  (
      <div
        style={{
          background: '#fff',
          position: 'fixed',
          width: '100%',
          zIndex: 1,
          borderBottom: '.01em solid rgb(204, 204, 204)'
        }}
      > 
        <div className={`overlay ${this.state.sidebar}`}></div>
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
                alt={Logo} 
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
        <div className={`hamb ${this.state.sidebar}`} onClick={this.toggle.bind(this)}>
          <div className="top"></div>
          <div className="mid"></div>
          <div className="bottom"></div>
        </div>
        <div className={`sidebar ${this.state.sidebar}`}>
            <div className="items">
              <Link to="/" activeClassName="current" exact={true} >Home</Link>
              <Link to="/about" activeClassName="current">About</Link>
              <Link to="/blog" activeClassName="current">Blog</Link>
              <Link to="/contact" activeClassName="current">Contact</Link>
            </div>
        </div>
      </div>
    )
  }
}
