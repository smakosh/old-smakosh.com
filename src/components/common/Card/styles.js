import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 100%;

	${({ id }) =>
    id === 0 &&
    `
		@media (max-width: 680px) {
			grid-row: 3;
		}
	`}

	${({ id }) =>
    id === 1 &&
    `
		@media (max-width: 680px) {
			grid-row: 2;
		}
	`}

	${({ id }) =>
    id === 2 &&
    `
		@media (max-width: 680px) {
			grid-row: 1;
		}
	`}
`

export const StyledCard = styled.div`
  height: 100%;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.09);
    transition: 0.3s;

    .gatsby-image-wrapper {
      transform: scale(1.05);
      transition: 0.3s;
      box-shadow: 0 17px 46px -5px rgba(0, 0, 0, 0.2);
      border-radius: 5px;

      img {
        border-radius: 5px;
        transition: 0.3s;
      }
    }
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
		background: #2b2a2a;
		color: #fff;
	`};
`
