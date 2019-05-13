import styled from 'styled-components'

export const Social = styled.div`
  a {
    display: flex;
    align-items: center;
    color: #212121;

    ${({ theme }) =>
      theme === 'dark' &&
      `
			color: #fff;
		`}

    @media (max-width: 960px) {
      justify-content: center;
    }
  }

  img {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-bottom: unset;
    margin-right: 0.5rem;

    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }
`
