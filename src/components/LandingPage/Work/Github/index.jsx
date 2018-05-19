import React, { Component } from 'react'

import GithubIcon from '../../../../../static/creative/github-white.svg'
import Unnamed from '../../../../../static/github/unnamed.svg'
import Perceptron from '../../../../../static/github/perceptron.svg'
import Todo from '../../../../../static/github/todo.svg'

import { More, Card } from '../../../common'

export default class Github extends Component {

    state = {
        repositories: [
            {
                id: 0,
                title: 'Unnamed',
                image: `${Unnamed}`,
                link: 'https://github.com/smakosh/unnamed-css-framework',
                description: 'A simple colorful css framework I made'
            },
            {
                id: 1,
                title: 'Perceptron',
                image: `${Perceptron}`,
                link: 'https://github.com/smakosh/Perceptron-neural-net-from-scratch',
                description: 'A single artificial neuron from scratch'
            },
            {
                id: 2,
                title: 'Todo Apps',
                image: `${Todo}`,
                link: 'https://github.com/smakosh/react-todolist',
                description: 'A simple react/redux/firebase todo app'
            }
        ]
    }

    render() {
        return (
            <div
                style={{
                    background: '#fff',
                    marginBottom: '2.5rem'
                }}
            >   
                <h3>Open sourced on Github</h3>
                <div className="work">
                    {this.state.repositories.map(repository => (
                        <Card
                            key={repository.id}
                            title={repository.title}
                            image={repository.image}
                            link={repository.link}
                            description={repository.description}
                            svg
                        />
                    ))}
                    <More link="https://github.com/smakosh" color="#000" icon={GithubIcon} />
                </div>
            </div>
        )
    }
}