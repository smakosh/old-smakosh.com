import React from 'react'
import { Layout, SEO } from 'Common'
import ContactForm from 'Components/contact/ContactForm'

const Contact = () => (
	<Layout>
		<SEO title="Contact" type="Organization" location="/contact" />
		<ContactForm />
	</Layout>
)
export default Contact
