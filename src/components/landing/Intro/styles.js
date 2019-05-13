import styled from 'styled-components'

export const MagicalButton = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: #00c3ff;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 196, 255, 0.9) 0px 13px 19px -6px;
  transition: 0.5s;

  @media (max-width: 380px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  &:hover {
    box-shadow: 0px 0px 17px 0px rgba(0, 196, 255, 0.36);
    transition: 0.5s;
  }

  &:first-child {
    margin-right: 1rem;
    background: #f9f9f9;
    color: #00c3ff;
    box-shadow: rgb(185, 185, 185) 0px 13px 19px -6px;

    &:hover {
      box-shadow: 0px 0px 17px 0px rgba(185, 185, 185, 0.4);
    }

    @media (max-width: 380px) {
      margin: 0 auto 1.5rem auto;
    }
  }
`

export const Wrapper = styled.div`
  padding: 4rem 1rem;

  p {
    color: gray;
    margin-bottom: 2rem;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`}
`

export const Flex = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`
