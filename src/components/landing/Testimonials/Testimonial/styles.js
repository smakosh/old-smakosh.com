import styled from 'styled-components'

export const Review = styled.div`
  padding-bottom: 1rem;

  p {
    color: ${({ theme }) => (theme === 'dark' ? '#d1d1d1' : '#383838')};
    line-height: 1.5;
    font-size: 14pt;
    margin-bottom: unset;
  }
`

export const Human = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-bottom: unset;
  }
`

export const Details = styled.div`
  margin-left: 0.3rem;

  h4 {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    margin: unset;
    font-size: 12pt;
  }

  p {
    color: ${({ theme }) => (theme === 'dark' ? '#aeaeae' : '#4E4E4E')};
    font-size: 9pt;
    margin: unset;
    line-height: 1.2;
  }
`
