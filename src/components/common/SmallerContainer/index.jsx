import React from 'react'
import cx from 'classnames'
const SmallerContainer = ({ children, className }) =>
    <div className={cx('small-container', className)}>
        {children}
    </div>

export { SmallerContainer }