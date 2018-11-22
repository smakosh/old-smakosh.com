import React from 'react'
import { compose } from 'recompose'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import Recaptcha from 'react-google-recaptcha'
import { navigate } from 'gatsby'
import { SmallerContainer, CustomButton, ThemeContext } from 'Common'
import { Wrapper, InputField, Center, Error, Text } from './styles'

const ContactForm = ({
	errors,
	touched,
	handleChange,
	isSubmitting
}) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<SmallerContainer contact tl>
				<Text theme={theme}>Feel free to email me via <a href="mailto:ismai23l@hotmail.com" target="_top">ismai23l@hotmail.com</a></Text>
				<Text as="p" theme={theme}>Or fill in the contact form down below</Text>
				<Form
					method="post"
					data-netlify="true"
					data-netlify-recaptcha="true"
					data-netlify-honeypot="bot-field"
				>
					<noscript>
						<p>This form won’t work with Javascript disabled</p>
					</noscript>
					<Wrapper theme={theme}>
						<label htmlFor="name" aria-label="please insert your name">
							Full name:
							<InputField
								component="input"
								as={Field}
								type="text"
								error={(touched.name && errors.name) ? 1 : 0}
								name="name"
							/>
						</label>
						{touched.name && errors.name && <Error>{errors.name}</Error>}
					</Wrapper>
					<Wrapper theme={theme}>
						<label htmlFor="email" aria-label="please insert your email">
							Your email:
							<InputField
								component="input"
								as={Field}
								type="email"
								error={(touched.email && errors.email) ? 1 : 0}
								name="email"
							/>
						</label>
						{touched.email && errors.email && <Error>{errors.email}</Error>}
					</Wrapper>
					<Wrapper theme={theme}>
						<label htmlFor="message" aria-label="please insert your message">
							Message:
							<InputField
								component="textarea"
								as={Field}
								error={(touched.message && errors.message) ? 1 : 0}
								name="message"
								textarea="true"
							/>
						</label>
						{touched.message && errors.message && <Error>{errors.message}</Error>}
					</Wrapper>
					<Field
						component={Recaptcha}
						sitekey="6Lcs6lQUAAAAAEwhNH2IsobIe2csdda4TU3efpMN"
						onChange={handleChange}
					/>
					{touched.recaptcha && errors.recaptcha && <Error>{errors.recaptcha}</Error>}
					<Center>
						<CustomButton type="submit" disabled={isSubmitting}>Send</CustomButton>
					</Center>
				</Form>
			</SmallerContainer>
		)}
	</ThemeContext.Consumer>
)

const enhance = compose(
	withFormik({
		mapPropsToValues: () => ({
			name: '',
			email: '',
			message: '',
			recaptcha: ''
		}),
		validationSchema: () => Yup.object().shape({
			name: Yup.string().required('Name is required'),
			email: Yup.string().email('Please enter a valid email!').required('Email is required!'),
			message: Yup.string().required('Message is required'),
			recaptcha: Yup.string().required('Robots are not welcome yet!')
		}),
		handleSubmit: async ({
			name, email, message, recaptcha
		}, { setSubmitting, resetForm }) => {
			try {
				const encode = data => {
					return Object.keys(data)
						.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
						.join('&')
				}
				await fetch('/?no-cache=1', {
					method: 'POST',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: encode({
						'form-name': 'smakosh',
						name,
						email,
						message,
						'g-recaptcha-response': recaptcha
					})
				})
				setSubmitting(false)
				resetForm()
				navigate('/thanks/')
			} catch (err) {
				setSubmitting(false)
				alert('Something went wrong, please try again!') // eslint-disable-line
			}
		}
	})
)

export default enhance(ContactForm)
