import React from 'react'

import './styles.scss'

const Repository = ({image, title, link}) => (
    <a
        className='repository'
        target="_blank"
        href={link}
    >   
        <div className="repository-header">
            <h3>
                {title}
            </h3>
        </div>
        <div className="repository-image">
            <img 
                src={image} 
                alt={title}
            />
        </div>
        <div className="repository-footer">
            <h4>Learn more</h4>
        </div>
    </a>
)

export default Repository