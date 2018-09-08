import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import styled from 'styled-components'
import Recaptcha from 'react-google-recaptcha'
import { navigateTo } from 'gatsby-link'
import { SmallerContainer, CustomButton } from '../../common'

const encode = data => {
	return Object.keys(data)
		.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
		.join('&')
}

const ContactForm = ({ name, email, message, handleChange, handleSubmit, handleRecaptcha }) => (
	<SmallerContainer contact tl>
		<h4>Feel free to email me via <a href="mailto:ismai23l@hotmail.com" target="_top">ismai23l@hotmail.com</a></h4>
		<p>Or fill in the contact form and submit it!</p>
		<form
			action="/thanks/"
			name="newname"
			method="POST"
			data-netlify="true"
			data-netlify-recaptcha="true"
			onSubmit={handleSubmit}
		>
			<noscript>
				<p>This form won’t work with Javascript disabled</p>
			</noscript>
			<p>
				<label>
				Your full name: <InputField as="input" type="text" name="name" value={name} onChange={handleChange} />
				</label>
			</p>
			<p>
				<label>
				Your email: <InputField as="input" type="email" name="email" value={email} onChange={handleChange} />
				</label>
			</p>
			<p>
				<label>
				Message: <InputField as="textarea" textarea name="message" value={message} onChange={handleChange} />
				</label>
			</p>
			<Recaptcha sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY} onChange={handleRecaptcha} />
			<Center>
				<CustomButton>Send</CustomButton>
			</Center>
		</form>
	</SmallerContainer>
)

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
	border-radius: 2px;
	padding: .6rem 1rem;
	-webkit-appearance:none;
	&:focus  {
		border-color: #212121;
		transition: all .2s ease;
	}
	${({ textarea }) => textarea && `
		resize: vertical;
		min-height: 8rem;
		margin: 0;
	`}
`

const Center = styled.div`
	text-align: center;
`

const enhance = compose(
	withStateHandlers(
		() => ({
			name: '', email: '', message: '', recaptcha: null
		}),
		{
			handleSubmit: ({ name, email, message, recaptcha }) => e => {
				e.preventDefault()
				const form = e.target

				if (!e.target.name.value
					|| !e.target.email.value || !e.target.message.value || !recaptcha) {
					alert('Please fill in all the required fields :)') // eslint-disable-line no-undef
				} else {
					fetch('/', { // eslint-disable-line no-undef
						method: 'POST',
						headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
						body: encode({
							'form-name': form.getAttribute('name'),
							name,
							email,
							message
						})
					})
						.then(() => navigateTo(form.getAttribute('action')))
						.catch(() => alert('Something went wrong, please try again!')) // eslint-disable-line no-undef
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

export default enhance(ContactForm)
