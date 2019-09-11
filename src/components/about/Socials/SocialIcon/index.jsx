import React from 'react'
import { Social } from './styles'

export default ({ name, link, darkIcon, lightIcon, theme }) => (
  <Social theme={theme}>
    <a href={link} rel="noopener noreferrer" target="_blank">
      <img
        src={theme === 'dark' ? darkIcon.publicURL : lightIcon.publicURL}
        alt={name}
      />
      {name}
    </a>
  </Social>
)
