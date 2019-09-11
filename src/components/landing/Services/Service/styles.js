import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: left;
  width: 100%;
  height: 100%;

  @media (max-width: 680px) {
    margin-bottom: 2rem;
    text-align: center;

    &:last-child {
      margin-bottom: unset;
    }
  }

  ${({ theme }) =>
    theme === 'dark'
      ? `
    p {
      color: #BABABA;
    }
  `
      : `
    p {
      color: #545454;
    }
  `}
`

export const Grow = styled.div`
  height: 150px;
  overflow: hidden;

  img {
    width: 130px;
    transition: all 0.2s ease-in-out;
    margin: 0 auto 1rem auto;

    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }

  @media (max-width: 680px) {
    height: 160px;

    img {
      width: 160px;
    }
  }
`

export const Title = styled.h4`
  font-weight: bold;
`
