import React from 'react'
const Container = ({ children, className }) => (
    <div className={`${className ? className : ''} container`}>
        {children}
    </div>
)

export {Container}