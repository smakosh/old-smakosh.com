import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import './style.scss'

const Hamburger = ({sidebar, toggle}) => (
    <div className={cx('hamb', {'active': sidebar})} onClick={toggle}>
        <div className="top"></div>
        <div className="mid"></div>
        <div className="bottom"></div>
    </div>
)

export default Hamburger