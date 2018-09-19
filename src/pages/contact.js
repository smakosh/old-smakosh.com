import React from 'react'
import { Layout, Head } from '../components/common'
import ContactForm from '../components/ContactPage/ContactForm'

const Contact = () => (
	<Layout>
		<Head type="Organization" location="/contact">Smakosh | Contact</Head>
		<ContactForm />
	</Layout>
)
export default Contact
