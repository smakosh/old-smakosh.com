import styled from 'styled-components'
import { Link } from 'gatsby'

export const Tag = styled(Link)`
  padding: 0.2rem 1rem;
  background: ${({ theme }) => (theme === 'dark' ? '#999' : '#181717')};
  border-radius: 50px;
  transition: 0.3s all;

  &:hover {
    background: #696666;
    transition: 0.3s all;
  }
`
