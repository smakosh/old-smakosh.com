import styled from 'styled-components'

export const Wrapper = styled.div`
	margin-bottom: 1.45rem;
	color: #212121;
	padding: 8rem 1rem 7rem 1rem;
	clip-path: polygon(0% 14%, 100% 0, 100% 84%, 0 100%);
	background: #f9f9f9;

	${({ theme }) => theme === 'dark' && `
		color: #fff;
		background: #2b2a2a;
	`}
`

export const SkillsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 2rem 0;
	max-width: 960px;
	margin: 0 auto;

	@media (max-width: 680px) {
		flex-direction: column;
	}
`

export const Tech = styled.div`
	text-align: left;

	a {
		color: #212121;
		text-decoration: underline;

		${({ theme }) => theme === 'dark' && `
			color: #fff;
		`}
	}
`

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 2rem;

	h2 {
		margin: 0;
		font-size: 20pt;
	}
`

export const Label = styled.label`
	position: relative;
	display: inline-block;
	width: 50px;
	height: 20px;
	margin: 0 1rem;
`

export const Input = styled.input`
	display: none;

	&:checked + span {
		background-color: #eee;
	}

	&:checked + span:before {
		transform: translateX(30px);
		background: #000;
	}
`

export const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #000;
	transition: .4s;
	border-radius: 34px;

	&:before {
		position: absolute;
		content: "";
		height: 12px;
		width: 12px;
		left: 4px;
		bottom: 4px;
		transition: .4s;
		border-radius: 50%;
		background-color: #fff;
	}
`
