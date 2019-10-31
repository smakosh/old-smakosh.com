import React, { useContext } from 'react'
import { Link } from 'gatsby'
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

  return (
    <Wrapper as={Container}>
      <Text lineHeight={1.6} color={theme === 'dark' ? 'white' : 'dark'}>
        I’m Ismail Ghallou, also known as Smakosh, I’m a self-taught Graphic,
        UI/UX Designer and full stack JavaScript developer. I'm really
        interested in technology that it's the one I think about when ever I'm
        trying to solve an issue whether in the virtual or real life. You can
        know more about me by reading my <Link to="/blog">articles</Link>.
      </Text>
      <Text lineHeight={1.6} color={theme === 'dark' ? 'white' : 'dark'}>
        Currently I'm working onsite for{' '}
        <a
          href="https://www.maltem.com/en/?ref=smakosh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maltem Africa
        </a>{' '}
        as a Full stack JavaScript developer.
      </Text>
      <Text lineHeight={1.6} color={theme === 'dark' ? 'white' : 'dark'}>
        For business inquiries feel free to get in touch with me at:
      </Text>
      <DetailsContainer>
        <P color={theme === 'dark' ? 'white' : 'dark'}>
          <Img src={theme === 'dark' ? EnvelopeWhite : Envelope} alt="email" />
          ismai23l@hotmail.com
        </P>
        <P color={theme === 'dark' ? 'white' : 'dark'}>
          <Img src={theme === 'dark' ? PhoneWhite : Phone} alt="phone" />
          +212 663-532761
        </P>
        <P color={theme === 'dark' ? 'white' : 'dark'}>
          <Img src={theme === 'dark' ? MarkerWhite : Marker} alt="address" />
          Nr 23 Lot El Waha, Errachidia, Morocco
        </P>
        <P color={theme === 'dark' ? 'white' : 'dark'}>
          <Img src={theme === 'dark' ? MarkerWhite : Marker} alt="address" />
          Casablanca, Morocco
        </P>
      </DetailsContainer>
    </Wrapper>
  )
}
