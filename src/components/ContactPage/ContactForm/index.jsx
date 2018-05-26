import React, { Component } from 'react'
import Recaptcha from "react-google-recaptcha"
import { navigateTo } from 'gatsby-link'

import { SmallerContainer } from '../../common'

import './style.scss'

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY || '6Lcs6lQUAAAAAEwhNH2IsobIe2csdda4TU3efpMN'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

class ContactForm extends Component {
    state = {}

    handleRecaptcha = value => this.setState({ "g-recaptcha-response": value })

    handleSubmit = e => {
        e.preventDefault()
        const form = e.target

        if(!e.target.name.value || !e.target.email.value || !e.target.message.value) {
            return alert('Please fill in all the required fields :)')
        } else {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                  "form-name": form.getAttribute("name"),
                  ...this.state
                })
              })
                .then(() => navigateTo(form.getAttribute("action")))
                .catch(error => alert('Something went wrong, please try again!'))
            e.target.name.value = ''
            e.target.email.value = ''
            e.target.message.value = ''
        }
    }
    
    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    render() {
        const { name, email, message } = this.state
        return (
            <div>
                <SmallerContainer className="contact-card left-text">
                    <h4>Feel free to email me via <a href="mailto:ismai23l@hotmail.com" target="_top">ismai23l@hotmail.com</a></h4>
                    <p>Or fill in the contact form and submit it!</p>
                    <form
                        action="/thanks/"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                        onSubmit={this.handleSubmit}>
                        <noscript>
                            <p>This form won’t work with Javascript disabled</p>
                        </noscript>
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
                        <Recaptcha
                            ref="recaptcha"
                            sitekey={RECAPTCHA_KEY}
                            onChange={this.handleRecaptcha}
                        />
                        <p className="center-text">
                            <button type="submit" className="gradient-blue">Send</button>
                        </p>
                    </form>
                </SmallerContainer>
            </div>
        )
    }
}

export { ContactForm }
