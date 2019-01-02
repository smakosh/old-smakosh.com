import React from 'react'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'
import config from 'Data'
import { Wrapper } from './styles'

export const SocialShare = ({ title, path, iconSize = 32 }) => (
  <Wrapper>
    <RedditShareButton url={`${config.url}${path}`} title={title}>
      <RedditIcon round size={iconSize} />
    </RedditShareButton>
    <TwitterShareButton url={`${config.url}${path}`} title={title}>
      <TwitterIcon round size={iconSize} />
    </TwitterShareButton>
    <GooglePlusShareButton url={`${config.url}${path}`}>
      <GooglePlusIcon round size={iconSize} />
    </GooglePlusShareButton>
    <FacebookShareButton url={`${config.url}${path}`} quote={title}>
      <FacebookIcon round size={iconSize} />
    </FacebookShareButton>
    <LinkedinShareButton
      url={`${config.url}${path}`}
      title={title}
      description={title}
    >
      <LinkedinIcon round size={iconSize} />
    </LinkedinShareButton>
    <TelegramShareButton url={`${config.url}${path}`}>
      <TelegramIcon round size={iconSize} />
    </TelegramShareButton>
  </Wrapper>
)
