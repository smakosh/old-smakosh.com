import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { SmallerContainer, GithubIcon } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import gatsbyIcon from 'assets/footer/gatsby.svg'
import zeitIcon from 'assets/footer/zeit-black.svg'
import zeitWhiteIcon from 'assets/footer/zeit-white.svg'
import { Wrapper, Links, Item } from './styles'

export default () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper as={SmallerContainer} theme={theme}>
      <Links>
        ©{' '}
        <Item as={Link} to="/">
          Smakosh
        </Item>{' '}
        2016-{`${new Date().getFullYear()} `}
        Built with
        <a
          href="https://www.gatsbyjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Item src={gatsbyIcon} img alt="Gatssby js" />
        </a>
        Open sourced on
        <a
          href="https://github.com/smakosh/smakosh.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Item
            as={GithubIcon}
            img
            width="24"
            height="24"
            color={theme === 'dark' ? '#fff' : '#000'}
          />
        </a>
        and deployed on
        <a
          href="https://www.vercel.com/?utm_source=smakosh"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Item
            src={theme === 'light' ? zeitIcon : zeitWhiteIcon}
            img
            css="width:24px;"
            alt="Vercel"
          />
        </a>
      </Links>
    </Wrapper>
  )
}
