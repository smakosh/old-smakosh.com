import styled from 'styled-components'

export const CustomButton = styled.button`
  background-image: linear-gradient(10deg, #0072ff 0%, #00c6ff 100%);
  cursor: pointer;
  color: #fff;
  border-radius: 40px;
  margin: 0 auto;
  width: 160px;
  height: 50px;
  box-shadow: 0 4px 0px -4px #6a93ff;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ subscribe }) =>
    subscribe &&
    `
		flex: 1;
		border-radius: 6px;
		margin-left: 1rem;
		height: 48px;

		@media (max-width: 800px) {
			flex: unset;
			margin: 0 auto;
		}
	`};
`
