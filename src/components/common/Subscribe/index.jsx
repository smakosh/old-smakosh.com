import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { compose } from 'recompose'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Container, CustomButton } from '../../common'
import {
	StyledForm,
	Subtitle,
	Title,
	Message,
	Error,
	Fields,
	Input
} from './styles'

const Subscribe = ({
	errors,
	isSubmitting,
	touched,
	values,
	handleBlur,
	handleChange
}) => (
	<Container subscribe>
		<StyledForm>
			<Form>
				<Title>Subscribe to Smakosh</Title>
				<Subtitle>Get the latest posts delivered right to your inbox</Subtitle>
				{(touched.email && errors.email) && (
					<Error>{errors.email}</Error>
				)}
				<Fields>
					<Field
						component={Input}
						aria-label="please insert your email"
						placeholder="youremail@example.com"
						onBlur={handleBlur('email')}
						onChange={handleChange('email')}
						type="email"
						name="email"
						error={!!errors.email}
					/>
					<CustomButton type="submit" subscribe disabled={isSubmitting}>Subscribe</CustomButton>
				</Fields>
				{values.status === 'success' && (
					<Message>
						Thank you! You will receive your first email shortly
						<span role="img" aria-label="successfully subscribed to news letter">🎉</span>
					</Message>
				)}
				{values.status === 'error' && (<Error server dangerouslySetInnerHTML={{ __html: values.msg }} />)}
			</Form>
		</StyledForm>
	</Container>
)

const enhance = compose(
	withFormik({
		mapPropsToValues() {
			return {
				email: ''
			}
		},
		validationSchema: () => Yup.object().shape({
			email: Yup.string().email('Please enter a valid email!').required('Email is required!')
		}),
		handleSubmit(values, { setErrors, setSubmitting, setValues }) {
			const {
				email
			} = values
			addToMailchimp(email, {
				pathname: document.location.pathname
			}).then(res => {
				if (res.result === 'success') {
					setValues({ status: 'success', msg: res.msg, email  })
					setSubmitting(false)
				} else {
					setValues({ status: 'error', msg: res.msg, email  })
					setSubmitting(false)
				}
			}).catch(err => {
				setErrors({ message: err, status: 'error' })
				setSubmitting(false)
			})
		}
	})
)

export default enhance(Subscribe)
