import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link'

import { SmallerContainer } from '../common'

import './style.scss'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

class ContactForm extends Component {
    state = {
        name: '', 
        email: '', 
        message: '' 
    }

    handleSubmit = e => {

        if(!e.target.name.value && !e.target.email.value && !e.target.message.value || !this.state.checked) {
            return alert('Go away bot!')
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        }).then(() => navigateTo('/thanks'))
        .catch(error => alert('Something went wrong, please try again!'))

            e.target.name.value = ''
            e.target.email.value = ''
            e.target.message.value = ''
        e.preventDefault()
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    render() {
        const { name, email, message } = this.state
        return (
            <SmallerContainer className="contact-card left-text">
                <form
                    onSubmit={this.handleSubmit}
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    >
                    <p hidden>
                        <label>
                        Don’t fill this out: <input name="bot-field" />
                        </label>
                    </p>
                    <p>
                        <label>
                        Your full name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                        Your email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                        Message: <textarea name="message" value={message} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p className="center-text">
                        <button type="submit" className="gradient-blue">Send</button>
                    </p>
                </form>
            </SmallerContainer>
        )
    }
}

export default ContactForm