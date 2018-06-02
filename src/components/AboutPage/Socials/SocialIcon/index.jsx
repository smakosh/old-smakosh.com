import React from 'react'
import './styles.scss'

const SocialIcon = ({name, link, icon}) => 
    <div className="card-social">
        <a href={link} target="_blank">
            <img className="grow" src={icon} alt={name} />
        </a>
    </div>

export default SocialIcon