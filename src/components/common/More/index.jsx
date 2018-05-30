import React from 'react'
import './styles.scss'
const More = ({ link, color, icon}) => 
    <a
        href={link} 
        target="_blank"
        style={{
            backgroundColor: color
        }}
        className="more"
    >
        <img src={icon} alt={link} />
        See more
    </a>

export {More}