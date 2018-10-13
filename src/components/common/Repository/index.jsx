import React from 'react'
import { ThemeContext } from '../../common'
import StarIcon from '../../../../static/icons/star.svg'
import ForkIcon from '../../../../static/icons/fork.svg'
import StarIconWhite from '../../../../static/icons/star-white.svg'
import ForkIconWhite from '../../../../static/icons/fork-white.svg'
import { Wrapper, StyledRepository, Stars, Header, Description } from './styles'

const Repository = ({ id, node: {
	name,
	url,
	description,
	stargazers: {
		totalCount
	},
	forkCount
} }) => (
	<ThemeContext.Consumer>
		{({ theme }) => (
			<Wrapper id={id} as="a" href={url}>
				<StyledRepository theme={theme}>
					<Header theme={theme}>
						<h3>{name}</h3>
					</Header>
					<Description theme={theme}>
						<p>{description}</p>
					</Description>
					<Stars theme={theme}>
						<img src={theme === 'dark' ? StarIconWhite : StarIcon} alt="stars" />
						{totalCount}
						<img src={theme === 'dark' ? ForkIconWhite : ForkIcon} alt="forks" />
						{forkCount}
					</Stars>
				</StyledRepository>
			</Wrapper>
		)}
	</ThemeContext.Consumer>
)

export { Repository }
