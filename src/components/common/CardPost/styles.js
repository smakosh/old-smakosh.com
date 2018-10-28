import styled from 'styled-components'

export const Post = styled.div`
	margin-bottom: 1.5rem;
	border-radius: .1rem;
	box-shadow: 0 0 10px 0 rgba(33, 33, 33, 0.14);
	background: #fff;
	cursor: pointer;
	transition: .7s;

	&:hover, &:focus {
		box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .2);
		transition: .7s;
    }

    ${({ theme }) => theme === 'dark' && `
        background: #2b2a2a;
    `}
`

export const ArticleContent = styled.div`
	padding: 1rem;
`

export const ArticleImg = styled.div`
	height: 400px;
	overflow: hidden;

	@media (max-width: 992px) {
			height: 300px;
	}

	@media (max-width: 680px) {
			height: 250px;
	}
`

export const ArticleTitle = styled.h2`
    color: #212121;

    ${({ theme }) => theme === 'dark' && `
        color: #fff;
    `}
`

export const Paragraph = styled.p`
    color: #616161;

    ${({ theme }) => theme === 'dark' && `
        color: #fff;
    `}
`

export const Info = styled.i`
	color: #212121;
    font-size: .8em;

    ${({ theme }) => theme === 'dark' && `
        color: #fff;
    `}
`

export const StyledSpan = styled.span`
	margin-left: 10px;
`
