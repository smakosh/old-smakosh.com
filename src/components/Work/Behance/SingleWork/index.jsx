import React from 'react'
import Link from 'gatsby-link'

import './work.scss'

const SingleWork = (props) => (
    <div
        className="card"
    >   
        <div className="card-header">
            <h4>
                {props.title}
            </h4>
        </div>
        <div className="card-image">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="card-footer">
            <Link
                target="_blank"
                to={props.link}
            >
                Learn more
            </Link>
        </div>
    </div>
)

export default SingleWork