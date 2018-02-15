import React from 'react'
import Link from 'gatsby-link'

import './work.scss'

const SingleWork = (props) => (
    <a
        className={`card card-${props.id}`}
        target="_blank"
        href={props.link}
    >   
        <div className="card-header">
            <h3>
                {props.title}
            </h3>
        </div>
        <div className="card-image">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="card-footer">
            <h4>
                Learn more
            </h4>
        </div>
    </a>
)

export default SingleWork