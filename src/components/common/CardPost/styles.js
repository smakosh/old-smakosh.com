import styled from 'styled-components'

export const Item = styled.div`
  max-width: 100%;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  align-self: stretch;

  ${({ landing }) =>
    landing &&
    `
      max-width: 32%;

      @media (max-width: 960px) {
        max-width: 48%;
      }
  `}

  @media (max-width: 480px) {
    max-width: 100%;
  }
`

export const Post = styled.div`
  border-radius: 0.2rem;
  box-shadow: 0 0 10px 0 rgba(33, 33, 33, 0.14);
  background: #fff;
  transition: 0.7s;
  height: 100%;
  overflow: hidden;

  @media (max-width: 680px) {
    display: flex;
    align-items: center;
  }

  &:hover,
  &:focus {
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.2);
    transition: 0.7s;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			background: #2b2a2a;
	`};

  ${({ talk }) =>
    talk &&
    `
    box-shadow: none;
    background: unset;

    &:hover {
      box-shadow: none;
    }
  `}
`

export const ArticleContent = styled.div`
  padding: 1rem;

  @media (max-width: 680px) {
    flex: 2;
    overflow: hidden;
    padding: 0 1rem;
  }
`

export const ArticleImg = styled.div`
  height: 300px;
  overflow: hidden;


  ${({ path }) =>
    path &&
    `
    cursor: pointer;
  `}

  ${({ landing }) =>
    landing &&
    `
		height: 200px;
	`}

  ${({ talk }) =>
    talk &&
    `
		border-radius: 8px;
	`}

  .gatsby-image-wrapper {
    height: 100%;
  }

  @media (max-width: 992px) {
    height: 300px;

    ${({ landing }) =>
      landing &&
      `
			height: 200px;
		`}
  }

  @media (max-width: 680px) {
    height: 150px;
    width: auto;
    flex: 1;

    ${({ talk }) =>
      talk &&
      `
      height: 170px;
    `}
  }
`

export const ArticleTitle = styled.h2`
  color: #212121;

  ${({ path }) =>
    path &&
    `
    cursor: pointer;
  `}

  @media (max-width: 680px) {
    margin-bottom: 0.1rem;
    font-size: 12pt;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const Paragraph = styled.p`
  color: #616161;
  overflow-y: hidden;

  ${({ path }) =>
    path &&
    `
    cursor: pointer;
  `}

  ${({ landing }) =>
    landing
      ? `
    height: 150px;
    `
      : `
    height: 100px;

    @media (max-width: 960px) {
      height: 100px;
    }
  `}

  @media (max-width: 680px) {
    height: 20px;
    overflow-y: hidden;
    margin-bottom: 0.1rem;
    font-size: 10pt;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const Info = styled.i`
  color: #212121;
  font-size: 0.8em;

  ${({ path }) =>
    path &&
    `
    cursor: pointer;
  `}

  @media (max-width: 680px) {
    font-size: 0.6em;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const StyledSpan = styled.span`
  margin-left: 10px;
`

export const TalkDetails = styled.div`
  padding: 0 0 0.5rem 0;
`

export const Slides = styled.div`
  padding: 0.2rem 0;
`

export const Demos = styled.div`
  padding: 0.2rem 0;

  a:first-child {
    margin-right: 1rem;
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: hidden;
  height: 80px;
  margin-bottom: 0.5rem;

  @media (max-width: 960px) {
    height: 38px;
  }

  a {
    margin: 0 1rem 1rem 0;
    color: #fff;

    @media (max-width: 960px) {
      padding: 0.05rem 0.5rem;
      margin: 0 0.4rem 0.4rem 0;
      font-size: 8pt;
    }

    &:last-child {
      margin: 0 0 1rem 0;

      @media (max-width: 960px) {
        margin: 0 0 0.4rem 0;
      }
    }
  }
`
