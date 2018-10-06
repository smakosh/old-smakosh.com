import styled from 'styled-components'

export const SkillsWrapper = styled.div`
	margin-bottom: 1.45rem;
	color: white;
	padding: 8rem 1rem 4rem 1rem;
	clip-path: polygon(0% 14%, 100% 0, 100% 84%, 0 100%);
	background-image: linear-gradient(10deg, #0072ff 0%, #00c6ff 100%);
`

export const SkillsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
	max-width: 960px;
	margin: 0 auto;

	@media screen and (max-width: 680px) {
		flex-direction: column;
	}
`

export const Tech = styled.div`
	text-align: left;
	a {
		color: #fff;
		text-decoration: underline;
	}
`
