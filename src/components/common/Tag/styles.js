import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledTag = styled(Link)`
  padding: 0.2rem 1rem;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border-radius: 50px;
  transition: 0.3s all;
  opacity: 1;

  &:hover {
    opacity: 0.8;
    transition: 0.3s all;
  }
`
