import React from 'react'

const SmallerContainer = ({ children, className }) => (
    <div className={`${className ? className : ''} small-container`}>
        {children}
    </div>
)

export {SmallerContainer}