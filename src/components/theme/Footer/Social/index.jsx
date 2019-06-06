import React from 'react'
import {
  Twitter,
  GithubIcon,
  Instagram,
  Unsplash,
  Linkedin,
} from 'components/common'
import { Social, Grow } from './styles.js'

export default () => {
  const social = [
    {
      id: 0,
      name: 'Twitter',
      link: 'https://twitter.com/smakosh',
      icon: Twitter,
      last: false,
    },
    {
      id: 1,
      name: 'Github',
      link: 'https://github.com/smakosh',
      icon: GithubIcon,
      last: false,
    },
    {
      id: 2,
      name: 'Instagram',
      link: 'https://instagram.com/smakosh19',
      icon: Instagram,
      last: false,
    },
    {
      id: 3,
      name: 'Unsplash',
      link: 'https://unsplash.com/smakosh',
      icon: Unsplash,
      last: false,
    },
    {
      id: 4,
      name: 'Linkedin',
      link: 'https://linkedin.com/in/ismail-ghallou-630149122',
      icon: Linkedin,
      last: false,
    },
  ]
  return (
    <li>
      {social.map(({ id, name, link, icon, last }) => (
        <Social
          key={id}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`follow me on ${name}`}
          href={link}
          last={last}
        >
          <Grow as={icon} width="24" height="24" />
        </Social>
      ))}
    </li>
  )
}
