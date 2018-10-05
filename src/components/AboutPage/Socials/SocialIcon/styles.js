import styled from 'styled-components'

export const SocialStyled = styled.img`
	cursor: pointer;
	transition: all .2s ease-in-out;

	&:hover  {
	transform: scale(1.1);
	transition: all .2s ease-in-out;
	}
	height: 2rem;
	@media screen and (max-width: 680px) {
		height: 1rem;
	}
`
