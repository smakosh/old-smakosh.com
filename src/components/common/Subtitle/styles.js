import styled from 'styled-components'

export const StyledSubtitle = styled.h2`
  margin-bottom: 2rem;
  transition: 0.3s;

  ${({ active }) =>
    active &&
    `
			opacity: .3;
			transition: .3s;
	`};

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`
