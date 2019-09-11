import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Container, ThemeContext } from 'components/common'
import Envelope from 'assets/about/envelope.svg'
import Phone from 'assets/about/phone.svg'
import Marker from 'assets/about/marker.svg'
import EnvelopeWhite from 'assets/about/envelope-white.svg'
import PhoneWhite from 'assets/about/phone-white.svg'
import MarkerWhite from 'assets/about/marker-white.svg'
import { Wrapper, Img, P, DetailsContainer, Text } from './styles'

export const Details = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper as={Container}>
      <Text theme={theme}>
        I’m Ismail Ghallou, also known as Smakosh, I’m a self-taught Graphic,
        UI/UX Designer and full stack JavaScript developer. I'm really
        interested in Technology & solving technical problems. You can know more
        about me by reading my <Link to="/blog">articles</Link>.
      </Text>
      <Text theme={theme}>
        Currently I'm working remotely for{' '}
        <a
          href="https://obytes.com/?ref=smakosh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Obytes
        </a>{' '}
        as a Front-end developer.
      </Text>
      <Text theme={theme}>
        For business inquiries feel free to get in touch with me at:
      </Text>
      <DetailsContainer>
        <P theme={theme}>
          <Img src={theme === 'dark' ? EnvelopeWhite : Envelope} alt="email" />
          ismai23l@hotmail.com
        </P>
        <P theme={theme}>
          <Img src={theme === 'dark' ? PhoneWhite : Phone} alt="phone" />
          +212 663-532761
        </P>
        <P theme={theme}>
          <Img src={theme === 'dark' ? MarkerWhite : Marker} alt="address" />
          Nr 23 Lot El Waha, Errachidia, Morocco
        </P>
      </DetailsContainer>
    </Wrapper>
  )
}
