import React, { useContext } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Container, CustomButton } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import {
  FormWrapper,
  StyledForm,
  Subtitle,
  Title,
  Message,
  Error,
  Fields,
  Input,
} from './styles'

const Wrapper = ({
  errors,
  isSubmitting,
  touched,
  values,
  handleBlur,
  handleChange,
}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <FormWrapper as={Container}>
      <StyledForm theme={theme}>
        <Form>
          <Title theme={theme}>Subscribe to Smakosh.com</Title>
          <Subtitle theme={theme}>
            And get the latest articles delivered right to your inbox!
          </Subtitle>
          {touched.email && errors.email && <Error>{errors.email}</Error>}
          <Fields>
            <Field
              component={Input}
              aria-label="please insert your email"
              placeholder="youremail@example.com"
              onBlur={handleBlur('email')}
              onChange={handleChange('email')}
              type="email"
              name="email"
              error={errors.email}
            />
            <CustomButton type="submit" subscribe disabled={isSubmitting}>
              Subscribe
            </CustomButton>
          </Fields>
          {values.status === 'success' && (
            <Message>
              Thank you! You will receive your first email shortly
              <span
                role="img"
                aria-label="successfully subscribed to news letter"
              >
                🎉
              </span>
            </Message>
          )}
          {values.status === 'error' && (
            <Error server dangerouslySetInnerHTML={{ __html: values.msg }} />
          )}
        </Form>
      </StyledForm>
    </FormWrapper>
  )
}

export const Subscribe = withFormik({
  mapPropsToValues: () => ({ email: '' }),
  validationSchema: () =>
    Yup.object().shape({
      email: Yup.string()
        .email('Please enter a valid email!')
        .required('Email is required!'),
    }),
  handleSubmit: async ({ email }, { setErrors, setSubmitting, setValues }) => {
    try {
      const res = await addToMailchimp(email, {
        pathname: document.location.pathname,
      })
      if (res.result === 'success') {
        setValues({ status: 'success', msg: res.msg, email })
        setSubmitting(false)
      } else {
        setValues({ status: 'error', msg: res.msg, email })
        setSubmitting(false)
      }
    } catch (err) {
      setErrors({ message: err, status: 'error' })
      setSubmitting(false)
    }
  },
})(Wrapper)
