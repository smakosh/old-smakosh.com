import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  color: #212121;
  padding: 2rem 1rem;

  a {
    text-decoration: none;
    color: rgb(0, 119, 255);
  }

  i {
    color: #a7a7a7;
  }

  h1 {
    font-family: 'Merriweather', serif;
    text-align: center;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const Back = styled.div`
  margin-top: 2rem;
`

export const Content = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
`

export const Comments = styled.div`
  margin-top: 2rem;
`

export const ArticleDate = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: -1rem;
  margin-bottom: 1rem;

  i {
    font-size: 0.9em;

    &:first-child {
      margin-right: 0.2rem;
    }
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 0;

  a {
    margin: 0 1rem 1rem 0;
    color: #fff;

    &:last-child {
      margin: 0 0 1rem 0;
    }
  }
`
