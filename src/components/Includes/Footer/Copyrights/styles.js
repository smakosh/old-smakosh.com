import styled from 'styled-components'

export const Links = styled.div`
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Item = styled.img`
	margin: 0 .2rem;

	${({ img }) => img && `
		position: relative;
		top: .15rem;
	`}
`
