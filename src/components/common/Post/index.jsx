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

const Post = ({ post }) => (
	<ThemeContext.Consumer>
		{({ theme }) => {
			const disqusShortName = 'https-smakosh-com'
			const disqusConfig = {
				url: `https://smakosh.com${post.frontmatter.path}`,
				identifier: post.frontmatter.id,
				title: post.frontmatter.title
			}
			return (
				<ArticleWrapper theme={theme}>
					<PageTitle>{post.frontmatter.title}</PageTitle>
					<ArticleDate>
						<i>{post.frontmatter.date} -</i>
						<i>{post.timeToRead} min read</i>
					</ArticleDate>
					<Content dangerouslySetInnerHTML={{ __html: post.html }} />
					<SocialShare {...post.frontmatter} />
					<Back>
						<Link to={post.frontmatter.next}>Previous article</Link>
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
