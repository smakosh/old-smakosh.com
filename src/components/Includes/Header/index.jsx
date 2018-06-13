import React from 'react'
import { withPrefix } from 'gatsby-link'
import { compose, withStateHandlers, lifecycle } from 'recompose'
import cx from 'classnames'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import './style.scss'

const Header = ({ sidebar, toggle, isHomePage }) => (
  <div className={cx('header', {'fixed-header': isHomePage})}> 
    <div className={cx('overlay', {'active': sidebar})} onClick={toggle}></div>
    <Navbar />
    <Hamburger isHomePage={isHomePage} sidebar={sidebar} toggle={toggle} />
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
    }
  ),
  lifecycle({
    componentDidMount() {
      location.pathname === withPrefix('/') && this.setState({ isHomePage: true})
    }
  })
)

export default enhance(Header)