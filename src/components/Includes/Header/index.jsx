import React from 'react'
import Link from 'gatsby-link'
import { compose, withStateHandlers, lifecycle } from 'recompose'
import cx from 'classnames'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import './style.scss'

const Header = ({ sidebar, header, toggle }) => (
    <div
      style={{
        background: '#fff',
        position: header,
        width: '100%',
        zIndex: 1,
        borderBottom: '.01em solid rgb(204, 204, 204)'
      }}
    > 
      <div className={cx('overlay', {'active': sidebar})} onClick={toggle}></div>
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </div>
  )

const enhance = compose(
  withStateHandlers(
    ({initialStep = false}) => ({
      sidebar: initialStep
    }),
    {
      toggle: ({sidebar}) => value => ({
        sidebar: !sidebar,
      })
    },
  ),
  lifecycle({
    componentDidMount() {
      location.pathname === '/' && this.setState({ header: 'fixed'})
    }
  })
)

export default enhance(Header)