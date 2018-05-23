import React, { Component } from 'react'
import Link from 'gatsby-link'

import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'

import './style.scss'

class Header extends Component {

  state = {
    sidebar: '',
    header: 'none'
  }

  componentDidMount() {
    location.pathname === '/' && this.setState({ header: 'fixed'})
  }

  toggle = () => {
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
          position: this.state.header,
          width: '100%',
          zIndex: 1,
          borderBottom: '.01em solid rgb(204, 204, 204)'
        }}
      > 
        <div className={`overlay ${this.state.sidebar}`} onClick={this.toggle.bind(this)}></div>
        <Navbar />
        <Hamburger sidebar={this.state.sidebar} toggle={this.toggle} />
        <Sidebar sidebar={this.state.sidebar} toggle={this.toggle} />
      </div>
    )
  }
}

export { Header }