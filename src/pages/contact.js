import React from 'react'
import { Layout, Head } from 'Common'
import ContactForm from 'Components/ContactPage/ContactForm'

const Contact = () => (
	<Layout>
		<Head type="Organization" location="/contact">Smakosh | Contact</Head>
		<ContactForm />
	</Layout>
)
export default Contact
