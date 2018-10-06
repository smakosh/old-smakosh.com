import React from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import {
	Post,
	ArticleContent,
	ArticleImg,
	ArticleTitle,
	Paragraph,
	Info,
	StyledSpan
} from './styles'
import { ThemeContext } from '../ThemeContext'

const CardPost = ({ node }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<Post onClick={() => navigate(node.frontmatter.path)} theme={theme}>
				<ArticleImg>
					<Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
				</ArticleImg>
				<ArticleContent>
					<ArticleTitle theme={theme}>{node.frontmatter.title}</ArticleTitle>
					<Paragraph theme={theme}>{node.excerpt}</Paragraph>
					<Info theme={theme}>
						{node.frontmatter.date}
						<StyledSpan>{node.timeToRead} min</StyledSpan>
					</Info>
				</ArticleContent>
			</Post>
		)}
	</ThemeContext.Consumer>
)

export { CardPost }
