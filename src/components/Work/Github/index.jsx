import React, { Component } from 'react'

import Repo from './Repo'

import Unnamed from '../../../assets/images/work/github/unnamed.svg'
import Peceptron from '../../../assets/images/work/github/perceptron.svg'
import Todo from '../../../assets/images/work/github/todo.svg'

export default class Github extends Component {
    state = {
        repos: [
            {
                id: 0,
                title: 'Unnamed',
                image: `${Unnamed}`,
                link: 'https://github.com/smakosh/unnamed-css-framework',
                name: 'unnamed-css-framework'
            },
            {
                id: 1,
                title: 'Perceptron',
                image: `${Peceptron}`,
                link: 'https://github.com/smakosh/Perceptron-neural-net-from-scratch',
                name: 'Perceptron-neural-net-from-scratch'
            },
            {
                id: 2,
                title: 'Todo Apps',
                image: `${Todo}`,
                link: 'https://github.com/smakosh/react-todolist',
                name: 'react-todolist'
            }
        ]
    }
    render() {
        return (
            <div
                style={{
                background: '#fff',
                marginBottom: '1.45rem',
                padding: '1rem 1rem 0 1rem'
                }}
            >   
                <h2>Open source on Github</h2>
                <div className="work">
                    {
                        this.state.repos.map((repo) => {
                            return <Repo
                                        key={repo.id}
                                        title={repo.title}
                                        image={repo.image}
                                        link={repo.link}
                                        repo={repo.name}
                                    />
                        })
                    }
                    <a 
                        href="https://github.com/smakosh" 
                        target="_blank"
                        style={{
                            textDecoration: 'none',
                            color: '#000',
                            fontSize: '1.5em'
                        }}
                        className="more"
                    >
                        See more
                    </a>
                </div>
            </div>
        )
    }
}