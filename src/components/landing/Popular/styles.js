import styled from 'styled-components'

export const Wrapper = styled.a`
  padding: 2rem 0;
`

export const Center = styled.div`
  padding: 2rem 0;
  text-align: center;

  a {
    color: #fff;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    line-height: 50px;
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
