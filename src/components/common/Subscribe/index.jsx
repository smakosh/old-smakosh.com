import React, { Component } from 'react'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Container, CustomButton } from '../../common'

class Subscribe extends Component {
	state = {
		email: '',
		emailError: null,
		status: null,
		msg: null
	}

	onSubmitForm = e => {
		const { email } = this.state
		e.preventDefault()
		e.stopPropagation()

		this.setState({ status: 'sending', msg: null })

		if (!email) {
			this.setState({ emailError: 'Email is required!', status: null })
			this.clearError()
		} else if (!this.validateEmail(email)) {
			this.setState({ emailError: 'Email is Invalid!', status: null })
			this.clearError()
		} else {
			this.setState({ emailError: null, status: null })
		}

		addToMailchimp(email, {
			pathname: document.location.pathname // eslint-disable-line no-undef
		}).then(result => {
			if (result === 'success') {
				this.setState({ status: 'success', msg: result.msg, emailError: null })
			} else if (result === 'error') {
				this.setState({ status: 'error', msg: result.err })
			} else {
				this.setState({ status: 'error', msg: result.err })
			}
		}).catch(err => this.setState({ status: 'error', msg: err }))
	}

	clearError = () => {
		setTimeout(() => {
			this.setState({ emailError: null })
		}, 2000);
	}

	validateEmail = emailToBeValidate => {
		const RE = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
		return RE.test(emailToBeValidate)
	}

	handleEmailChange = e => this.setState({ email: e.target.value })

	render() {
		const { email, status, msg, emailError } = this.state
		return (
			<Container subscribe>
				<Form>
					<form onSubmit={this.onSubmitForm}>
						<Title>Subscribe to Smakosh</Title>
						<Subtitle>Get the latest posts delivered right to your inbox</Subtitle>
						<Fields>
							<Input
								aria-label="please insert your email"
								placeholder="youremail@example.com"
								type="email"
								value={email}
								onChange={this.handleEmailChange}
								error={emailError}
							/>
							<CustomButton subscribe disabled={status === 'sending'}>Subscribe</CustomButton>
						</Fields>
						{status === 'success' && (
							<Message>
								Thank you! You will receive your first email shortly
								<span role="img" aria-label="successfully subscribed to news letter">🎉</span>
							</Message>
						)}
						{status === 'error' && (
							<Error dangerouslySetInnerHTML={{ __html: msg }} />)}
					</form>
				</Form>
			</Container>
		)
	}
}

const Form = styled.div`
	width: 70%;
	margin: 0 auto;
	background: #fff;
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
				0px 2px 2px 0px rgba(0, 0, 0, 0.14),
				0px 3px 1px -2px rgba(0, 0, 0, 0.12);
	border-radius: 5px;
	position: relative;
	margin-bottom: -12rem;
	padding: 2rem;
	@media (max-width: 960px) {
		padding: 2rem 1rem;
		width: 80%;
	}
	@media (max-width: 800px) {
		width: 100%;
	}
`

const Subtitle = styled.p`
	margin-bottom: 1em;
	color: #738a94;
	font-size: 1.2em;
	line-height: 1.55em;
	letter-spacing: .2px;

	@media (max-width: 800px) {
		font-size: .8em;
	}
`

const Title = styled.h3`
	margin: 0 0 3px;
	padding: 0;
	color: #15171a;
	font-size: 1.5em;
	line-height: 1;
	font-weight: 700;

	@media (max-width: 800px) {
		font-size: 1em;
	}
`

const Message = styled.h4`
	margin: 0;
	position: absolute;
	top: 10rem;
	left: 0;
	right: 0;
	font-weight: normal;
	@media (max-width: 800px) {
		top: 12.5rem;
		font-size: .9em;
	}
`

const Error = styled.div`
	marginTop: '1rem'
`

const Fields = styled.div`
	display: flex;
	align-items: center;
	padding: 0rem 4rem;
	@media (max-width: 960px) {
		padding: 0rem 2rem;
	}
	@media (max-width: 800px) {
		flex-direction: column;
	}
`

const Input = styled.input`
	padding: .5rem;
	border: 2px solid #00b6ff;
	border-radius: 7px;
	flex: 2;
	${({ error }) => error && `
		border-color: #e53935;
	`}
	@media(max-width: 800px) {
		flex: unset;
		width: 100%;
		margin-bottom: 1rem;
	}
`

export { Subscribe }
