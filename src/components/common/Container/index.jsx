import React from 'react'

import './styles.scss'

const Container = ({ children, className }) => (
    <div className={`${className ? className : ''} container`}>
        {children}
    </div>
)

export {Container}