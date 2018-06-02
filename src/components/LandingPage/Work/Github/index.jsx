import React from 'react'
import { More, Card, GithubIcon } from '../../../common'
import Unnamed from '../../../../../static/github/unnamed.svg'
import Perceptron from '../../../../../static/github/perceptron.svg'
import Todo from '../../../../../static/github/todo.svg'

const Github = () => {
    const repositories = [
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
    return (
        <div style={{ background: '#fff', marginBottom: '2.5rem' }}>   
            <h3>Open sourced on Github</h3>
            <div className="work">
                {repositories.map(repository => <Card key={repository.id} {...repository} svg />)}
                <More link="https://github.com/smakosh" color="#000">
                    <GithubIcon className="mr2" />
                </More>
            </div>
        </div>
    )
}

export default Github