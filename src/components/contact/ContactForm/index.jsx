import React, { useContext } from 'react'
import axios from 'axios'
import { Formik, Form, FastField, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Recaptcha from 'react-google-recaptcha'
import { navigate } from 'gatsby'
import { SmallerContainer, CustomButton } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import {
  ContactWrapper,
  Wrapper,
  InputField,
  Center,
  Error,
  Text,
} from './styles'

const ContactForm = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <ContactWrapper as={SmallerContainer}>
      <Text theme={theme}>
        Feel free to email me via{' '}
        <a href="mailto:hello@smakosh.com" target="_top">
          hello@smakosh.com
        </a>
      </Text>
      <Text as="p" theme={theme}>
        Or fill in the contact form down below
      </Text>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
          recaptcha: '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is required'),
          email: Yup.string()
            .email('Please enter a valid email!')
            .required('Email is required!'),
          message: Yup.string().required('Message is required'),
          recaptcha: Yup.string().required('Robots are not welcome yet!'),
        })}
        onSubmit={async (
          { name, email, message },
          { setSubmitting, resetForm }
        ) => {
          try {
            await axios({
              method: 'POST',
              url:
                process.env.NODE_ENV !== 'development'
                  ? `https://smakosh.com/api/contact`
                  : 'http://localhost:3000/api/contact',
              headers: {
                'Content-Type': 'application/json',
              },
              data: JSON.stringify({
                name,
                email,
                message,
              }),
            })
            setSubmitting(false)
            resetForm()
            navigate('/thanks/')
          } catch (err) {
            setSubmitting(false)
            alert(error.response.data.error) // eslint-disable-line
          }
        }}
      >
        {({ touched, errors, setFieldValue, isSubmitting }) => (
          <Form>
            <noscript>
              <p>This form won’t work with Javascript disabled</p>
            </noscript>
            <input type="text" name="_gotcha" hidden />
            <Wrapper theme={theme}>
              <label htmlFor="name" aria-label="please insert your name">
                Full name:
                <InputField
                  component="input"
                  as={FastField}
                  type="text"
                  id="name"
                  error={touched.name && errors.name ? 1 : 0}
                  name="name"
                />
              </label>
              <ErrorMessage component={Error} name="name" />
            </Wrapper>
            <Wrapper theme={theme}>
              <label htmlFor="email" aria-label="please insert your email">
                Your email:
                <InputField
                  component="input"
                  as={FastField}
                  type="email"
                  id="email"
                  error={touched.email && errors.email ? 1 : 0}
                  name="email"
                />
              </label>
              <ErrorMessage component={Error} name="email" />
            </Wrapper>
            <Wrapper theme={theme}>
              <label htmlFor="message" aria-label="please insert your message">
                Message:
                <InputField
                  component="textarea"
                  as={FastField}
                  id="message"
                  error={touched.message && errors.message ? 1 : 0}
                  name="message"
                  textarea="true"
                />
              </label>
              <ErrorMessage component={Error} name="message" />
            </Wrapper>
            <FastField
              component={Recaptcha}
              sitekey="6Lcs6lQUAAAAAEwhNH2IsobIe2csdda4TU3efpMN"
              name="recaptcha"
              onChange={(value) => {
                if (!value) {
                  value = ''
                }
                setFieldValue('recaptcha', value)
              }}
            />
            <ErrorMessage component={Error} name="recaptcha" />
            <Center>
              <CustomButton type="submit" disabled={isSubmitting}>
                Send
              </CustomButton>
            </Center>
          </Form>
        )}
      </Formik>
    </ContactWrapper>
  )
}

export default ContactForm
