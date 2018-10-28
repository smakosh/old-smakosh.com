import React from 'react'
import Disqus from 'disqus-react'
import { Link } from 'gatsby'
import { SocialShare, PageTitle, ThemeContext } from '../../common'
import {
	ArticleWrapper,
	Back,
	Content,
	Comments,
	ArticleDate
} from './styles'

const Post = ({ html, frontmatter, timeToRead }) => (
	<ThemeContext.Consumer>
		{({ theme }) => {
			const disqusShortName = 'https-smakosh-com'
			const disqusConfig = {
				url: `https://smakosh.com${frontmatter.path}`,
				identifier: frontmatter.id,
				title: frontmatter.title
			}
			return (
				<ArticleWrapper theme={theme}>
					<PageTitle>{frontmatter.title}</PageTitle>
					<ArticleDate>
						<i>{frontmatter.date} -</i>
						<i>{timeToRead} min read</i>
					</ArticleDate>
					<Content
						dangerouslySetInnerHTML={{ __html: html }}
					/>
					<SocialShare {...frontmatter} />
					<Back>
						<Link to={frontmatter.next}>Previous article</Link>
					</Back>
					<Comments>
						<Disqus.DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
					</Comments>
				</ArticleWrapper>
			)
		}}
	</ThemeContext.Consumer>
)

export { Post }
