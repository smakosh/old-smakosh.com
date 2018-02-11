import React from 'react'

const Skill = (props) => (
    <div style={{ textAlign: 'center' }}>
        <img
            src={props.icon} 
            alt={props.icon}
            style={{
                height: '8rem',
                width: '8rem'
            }}
        />
        <h4>
            {props.title}
        </h4>
    </div>
)

export default Skill