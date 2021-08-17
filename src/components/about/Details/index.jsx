import React, { useContext, Fragment } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Container } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import Envelope from 'assets/about/envelope.svg'
import Phone from 'assets/about/phone.svg'
import Marker from 'assets/about/marker.svg'
import EnvelopeWhite from 'assets/about/envelope-white.svg'
import PhoneWhite from 'assets/about/phone-white.svg'
import MarkerWhite from 'assets/about/marker-white.svg'
import { Wrapper, Img, P, DetailsContainer, Text } from './styles'

export default () => {
  const { theme } = useContext(ThemeContext)
  const {
    about: { bio, currentPosition, email, phone, addresses },
  } = useStaticQuery(graphql`
    query {
      about: aboutYaml {
        bio
        currentPosition
        email
        addresses
      }
    }
  `)

  return (
    <Wrapper as={Container} width="100%" maxWidth="48%">
      <Text lineHeight={1.6} color={theme === 'dark' ? 'white' : 'dark'}>
        {bio} <Link to="/blog">articles</Link>.
      </Text>
      <Text
        lineHeight={1.6}
        color={theme === 'dark' ? 'white' : 'dark'}
        dangerouslySetInnerHTML={{ __html: currentPosition }}
      />
      <Text lineHeight={1.6} color={theme === 'dark' ? 'white' : 'dark'}>
        For business inquiries feel free to get in touch with me at:
      </Text>
      <DetailsContainer>
        <P color={theme === 'dark' ? 'white' : 'dark'}>
          <Img src={theme === 'dark' ? EnvelopeWhite : Envelope} alt="email" />
          {email}
        </P>
        {addresses.map((item, i) => (
          <Fragment key={i}>
            <P color={theme === 'dark' ? 'white' : 'dark'}>
              <Img
                src={theme === 'dark' ? MarkerWhite : Marker}
                alt="address"
              />
              {item}
            </P>
          </Fragment>
        ))}
      </DetailsContainer>
    </Wrapper>
  )
}
