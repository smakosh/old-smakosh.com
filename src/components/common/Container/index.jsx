import styled from 'styled-components'

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	width: 90%;
	@media only screen and (min-width: 601px) {
		width: 90%;
	}
	@media only screen and (min-width: 993px) {
		width: 80%;
	}
	${({ details }) => details && `
		flex: 1
	`}
`

export { Container }
