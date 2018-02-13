import React from 'react'

import SingleWork from './SingleWork'

const Behance = () => (
    <div
        style={{
            background: '#fff',
            marginBottom: '1.45rem',
            padding: '1rem 1rem 0 1rem'
        }}
    >   
        <h2>Behance</h2>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}
        >
            <SingleWork
                title="Test"
                image="a"
                link="a"
            />
            <SingleWork
                title="Test"
                image="a"
                link="a"
            />
            <SingleWork
                title="Test"
                image="a"
                link="a"
            />
            <SingleWork
                title="See More"
                image="a"
                link="a"
            />
        </div>
    </div>
)

export default Behance