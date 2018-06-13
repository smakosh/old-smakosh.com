import React from 'react'
import cx from 'classnames'
import './style.scss'

const Hamburger = ({sidebar, toggle, isHomePage}) => (
    <div className={cx('hamb', {'active': sidebar, 'fixed': isHomePage, 'absolute': !isHomePage})} onClick={toggle}>
        <div className="top"></div>
        <div className="mid"></div>
        <div className="bottom"></div>
    </div>
)

export default Hamburger