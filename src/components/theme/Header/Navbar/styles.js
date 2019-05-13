import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  color: #212121;

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const BrandLogo = styled.div`
  transition: 0.5s;
  height: 2.8rem;
  width: 2.8rem;
  margin-bottom: 0;
  margin-right: 0.5rem;

  &:hover {
    opacity: 0.7;
    transition: 0.5s;
    transform: rotate(360deg);
  }
`
