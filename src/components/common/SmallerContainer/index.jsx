import React from 'react'

import './styles.scss'

const SmallerContainer = ({ children, className }) => (
    <div className={`${className ? className : ''} small-container`}>
        {children}
    </div>
)

export {SmallerContainer}