import React from 'react'
import Link from 'gatsby-link'

import './repo.scss'

const Repo = (props) => (
    <a
        className='repo'
        target="_blank"
        href={props.link}
    >   
        <div className="repo-header">
            <h3>
                {props.title}
            </h3>
        </div>
        <div className="repo-image">
            <img 
                src={props.image} 
                alt={props.title}
            />
        </div>
        <div className="repo-footer">
            <iframe 
                className="iframe" 
                src={`https://ghbtns.com/github-btn.html?user=smakosh&repo=${props.repo}&type=star&count=true`}
                frameBorder="0" 
                scrolling="0" 
                width="90px" 
                height="20px"
                title="stars"
            >
            </iframe>
            <iframe 
                className="iframe" 
                src={`https://ghbtns.com/github-btn.html?user=smakosh&repo=${props.repo}&type=fork&count=true`}
                frameBorder="0" 
                scrolling="0" 
                width="90px" 
                height="20px"
                title="forks"
            >
            </iframe>
        </div>
    </a>
)

export default Repo