import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 0;

  .slick-next:before,
  .slick-prev:before {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  }

  .slick-next {
    right: -17px;
  }

  .slick-prev {
    left: -13px;
  }
`

export const Item = styled.div`
  width: 100%;
  padding: 0 1rem;

  &:focus {
    outline: none;
  }
`
