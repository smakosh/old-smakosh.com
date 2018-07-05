import React from 'react'
import cx from 'classnames'
import './style.scss'

const Hamburger = ({ sidebar, toggle, isHomePage }) => (
	<div className={cx('hamb', { active: sidebar, fixed: isHomePage, absolute: !isHomePage })} onClick={toggle}>
		<div className="top" />
		<div className="mid" />
		<div className="bottom" />
	</div>
)

export default Hamburger
