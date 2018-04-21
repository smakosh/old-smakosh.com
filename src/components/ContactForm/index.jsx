import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Recaptcha from 'react-recaptcha'
import { navigateTo } from 'gatsby-link'

import './style.scss'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

const noTify = () => { 
    toast("Your email has been successfully sent!", {
      position: toast.POSITION.TOP_CENTER
    })
}

class ContactForm extends Component {
    state = {
        checked: false,
        name: '', 
        email: '', 
        message: '' 
    }
    
    verifyCallback = response => {
        this.setState({ checked: true })
    }

    handleSubmit = e => {

        if(!e.target.name.value && !e.target.email.value && !e.target.message.value || !this.state.checked) {
            return alert('Go away bot!')
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => {
                noTify() 
                navigateTo('/thanks')
            })
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
            <div className="contact-card left-text">
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
                    <Recaptcha
                        sitekey="6LeFoVQUAAAAAKz240eqjZBdkaNjeueWRVJG5YzQ"
                        render="explicit"
                        verifyCallback={this.verifyCallback}
                    />
                    <p className="center-text">
                        <button type="submit" className="gradient-blue">Send</button>
                    </p>
                </form>
                <ToastContainer />
            </div>
        )
    }
}

export default ContactForm