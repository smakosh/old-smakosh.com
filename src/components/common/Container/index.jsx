import React from 'react'
import cx from 'classnames'
const Container = ({ children, className }) =>
    <div className={cx('container', className)}>
        { children }
    </div>

export { Container }