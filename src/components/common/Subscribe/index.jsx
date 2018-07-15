import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Container, CustomButton } from '../../common'
import './styles.scss'

class Subscribe extends Component {
	state = {
		email: ''
	}

	onSubmitForm = e => {
		const { email } = this.state
		e.preventDefault()
		e.stopPropagation()
		this.setState({ status: 'sending', msg: null })
		this.postEmailToMC(email, {
			pathname: document.location.pathname // eslint-disable-line no-undef
		})
	}

	postEmailToMC = (email, attributes) => {
		addToMailchimp(email, attributes)
			.then(result => {
				if (result.result !== 'success') {
					this.setState({ status: 'error', msg: result.msg })
				} else {
					this.setState({ status: 'success', msg: result.msg })
					setTimeout(() => {
						this.setState({ status: '' })
					}, 2000)
				}
			})
			.catch(err => this.setState({ status: 'error', msg: err }))
	}

	handleEmailChange = e => this.setState({ email: e.target.value })

	render() {
		const { status, msg } = this.state
		return (
			<Container className="subscribe-container">
				<div className="subscribe-form">
					<form onSubmit={this.onSubmitForm}>
						<h3>Subscribe to Smakosh</h3>
						<p>Get the latest posts delivered right to your inbox</p>
						<div className="form-fields">
							<input placeholder="youremail@example.com" type="email" onChange={this.handleEmailChange} required />
							<CustomButton>Subscribe</CustomButton>
						</div>
						{status === 'success' && (
							<h4>Thank you! You will receive your first email shortly <span role="img" aria-label="successfully subscribed to news letter">🎉</span></h4>
						)}
						{status === 'error' && (
							<div style={{ marginTop: '1rem' }} dangerouslySetInnerHTML={{ __html: msg }} />)}
					</form>
				</div>
			</Container>
		)
	}
}

export { Subscribe }
