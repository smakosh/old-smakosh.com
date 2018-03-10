import React from 'react'
import Link from 'gatsby-link'

import './repo.scss'

const Repo = ({image, title, link}) => (
    <a
        className='repo'
        target="_blank"
        href={link}
    >   
        <div className="repo-header">
            <h3>
                {title}
            </h3>
        </div>
        <div className="repo-image">
            <img 
                src={image} 
                alt={title}
            />
        </div>
        <div className="repo-footer">
            <h4>Learn more</h4>
        </div>
    </a>
)

export default Repo