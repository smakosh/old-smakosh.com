import React from 'react'
import './styles.scss'
const More = ({ link, color, icon, children }) => 
    <a href={link} target="_blank" style={{ backgroundColor: color }} className="more">
        { children }
        See more
    </a>

export { More }