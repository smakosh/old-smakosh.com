import React from 'react'
import Link from 'gatsby-link'
import { compose, withStateHandlers, lifecycle } from 'recompose'
import cx from 'classnames'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import './style.scss'

const Header = ({ sidebar, position, toggle }) => (
    <div className={cx('header', {'fixed-header': position})}> 
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
      location.pathname === '/' && this.setState({ position: true})
    }
  })
)

export default enhance(Header)