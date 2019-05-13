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

export const StyledRepository = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding: 1rem 1.5rem;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.09);
    transition: 0.3s;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			background: #2b2a2a;
			color: #fff;
	`};
`

export const Header = styled.div`
  padding: 1rem 0;

  h3 {
    font-size: 0.9em;
    margin: 0;
    font-weight: normal;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 1.2em;
    }

    ${({ theme }) =>
      theme === 'dark' &&
      `
				color: #fff;
		`};
  }
`

export const Description = styled.div`
  padding: 1rem 0;

  p {
    font-size: 16px;
    line-height: 1.46429em;
    margin: 0;
    color: #212121;

    ${({ theme }) =>
      theme === 'dark' &&
      `
				color: #fff;
		`};
  }
`

export const Stars = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  color: #212121;

  img {
    margin-right: 0.5rem;
    margin-bottom: 0;

    &:last-child {
      margin: 0 0.5rem 0 1rem;
    }
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`
