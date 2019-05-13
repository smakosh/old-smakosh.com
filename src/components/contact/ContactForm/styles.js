import styled from 'styled-components'

export const ContactWrapper = styled.div`
  padding: 2rem 0;
  text-align: left;
`

export const Wrapper = styled.div`
  margin-bottom: 2rem;

  ${({ theme }) =>
    theme === 'dark' &&
    `
		color: #fff;
	`};
`

export const InputField = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  transition: all 0.2s ease;
  text-align: left;
  border-width: 1px;
  border-color: #212121;
  border-style: solid;
  border-radius: 4px;
  padding: 0.6rem 1rem;
  -webkit-appearance: none;
  color: #828282;

  &:focus {
    border-color: #212121;
    transition: all 0.2s ease;
  }

  ${({ error }) =>
    error &&
    `
		border-color: red;
	`};

  ${({ textarea }) =>
    textarea &&
    `
		resize: vertical;
		min-height: 8rem;
		margin: 0;
	`};
`

export const Center = styled.div`
  text-align: center;
`

export const Error = styled.div`
  color: red;
`

export const Text = styled.h4`
  ${({ theme }) =>
    theme === 'dark' &&
    `
		color: #fff;
	`};
`
