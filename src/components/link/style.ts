import styled from 'styled-components'

type StyledLinkProps = {
  primary?: boolean
}

export const StyledBox = styled.div<StyledLinkProps>`
 background: ${props => props.primary ? 'var(--color-primary-lighter)' : 'var(--color-secondary)'};
 &:hover {
   background: ${props => props.primary ? 'var(--color-primary-light)' : 'var(--color-secondary-dark)'};
 }
`