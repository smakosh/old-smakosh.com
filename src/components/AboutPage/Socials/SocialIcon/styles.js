import styled from 'styled-components'

export const SocialStyled = styled.img`
	cursor: pointer;
	transition: all .2s ease-in-out;
	height: 2rem;

	&:hover  {
		transform: scale(1.1);
		transition: all .2s ease-in-out;
	}
	
	@media (max-width: 680px) {
		height: 1rem;
	}
`
