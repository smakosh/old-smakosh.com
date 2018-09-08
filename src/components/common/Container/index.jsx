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
	${({ nav }) => nav && `
		padding: .8rem 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	`}
	${({ footer }) => footer && `
		padding: 2rem 0;
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
		@media screen and (max-width: 680px) {
			flex-direction: column;
			justify-content: center;
			text-align: center;
		}
	`}
	${({ subscribe }) => subscribe && `
		text-align: center;
		padding-top: 3rem;
	`}
`

export { Container }
