import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import styled from 'styled-components'
import Recaptcha from 'react-google-recaptcha'
import { navigate } from 'gatsby'
import { SmallerContainer, CustomButton } from '../../common'

const ContactForm = ({
	name,
	email,
	message,
	handleChange,
	handleSubmit,
	handleRecaptcha,
	handleTouch,
	nameError,
	emailError,
	messageError
}) => (
	<SmallerContainer contact tl>
		<h4>Feel free to email me via <a href="mailto:ismai23l@hotmail.com" target="_top">ismai23l@hotmail.com</a></h4>
		<p>Or fill in the contact form down below</p>
		<form
			action="/thanks/"
			name="smakosh"
			method="post"
			data-netlify="true"
			data-netlify-recaptcha="true"
			data-netlify-honeypot="bot-field"
			onSubmit={handleSubmit}
		>
			<noscript>
				<p>This form won’t work with Javascript disabled</p>
			</noscript>
			<Wrapper>
				<label>
				Full name:
					<InputField as="input" type="text" name="name" value={name} error={nameError} onBlur={handleTouch} onChange={handleChange} />
					{nameError && <Error>{nameError}</Error>}
				</label>
			</Wrapper>
			<Wrapper>
				<label>
				Your email:
					<InputField as="input" type="email" name="email" value={email} error={emailError} onBlur={handleTouch} onChange={handleChange} />
					{emailError && <Error>{emailError}</Error>}
				</label>
			</Wrapper>
			<Wrapper>
				<label>
				Message:
					<InputField as="textarea" textarea name="message" value={message} error={messageError} onBlur={handleTouch} onChange={handleChange} />
					{messageError && <Error>{messageError}</Error>}
				</label>
			</Wrapper>
			<Recaptcha sitekey="6Lcs6lQUAAAAAEwhNH2IsobIe2csdda4TU3efpMN" onChange={handleRecaptcha} />
			<Center>
				<CustomButton>Send</CustomButton>
			</Center>
		</form>
	</SmallerContainer>
)

const enhance = compose(
	withStateHandlers(
		() => ({
			name: '', email: '', message: '', nameError: null, emailError: null, messageError: null, recaptcha: null
		}),
		{
			handleTouch: () => e => { // eslint-disable-line
				const isEmail = email => {
					const RE = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
					return RE.test(email)
				}
				if (!e.target.value) {
					return {
						[`${e.target.name}Error`]: `${e.target.name} field is required`
					}
				}
				if (e.target.name === 'email' && !isEmail(e.target.value)) {
					return {
						emailError: 'Email is invalid'
					}
				}

				if (e.target.value) {
					return {
						[`${e.target.name}Error`]: null
					}
				}
			},
			handleSubmit: ({ name, email, message, recaptcha }) => e => {
				e.preventDefault()
				const form = e.target
				if (!name || !email || !message || !recaptcha) {
					alert('Please fill in all the required fields :)')
				} else {
					const encode = data => {
						return Object.keys(data)
							.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
							.join('&')
					}
					const payload = {
						name,
						email,
						message,
						'g-recaptcha-response': recaptcha
					}
					fetch('/', {
						method: 'POST',
						headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
						body: encode({
							'form-name': form.getAttribute('name'),
							...payload
						})
					})
						.then(() => navigate(form.getAttribute('action')))
						.catch(() => alert('Something went wrong, please try again!'))
					e.target.name.value = ''
					e.target.email.value = ''
					e.target.message.value = ''
				}
			},
			handleRecaptcha: () => value => ({ recaptcha: value  }),
			handleChange: () => e => ({ [e.target.name]: e.target.value })
		}
	)
)

const Wrapper = styled.div`
	margin-bottom: 2rem;
`

const InputField = styled.div`
	width: 100%;
	margin-top: 1rem;
	margin-bottom: 1rem;
	box-sizing: border-box;
	transition: all .2s ease;
	text-align: left;
	border-width: 1px;
	border-color: #212121;
	border-style: solid;
	border-radius: 4px;
	padding: .6rem 1rem;
	-webkit-appearance:none;
	color: #828282;
	&:focus  {
		border-color: #212121;
		transition: all .2s ease;
	}
	${({ textarea }) => textarea && `
		resize: vertical;
		min-height: 8rem;
		margin: 0;
	`}
	${({ error }) => error && `
		border-color: red;
	`}
`

const Center = styled.div`
	text-align: center;
`

const Error = styled.div`
	color: red;
`

export default enhance(ContactForm)
