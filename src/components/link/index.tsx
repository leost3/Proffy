import './styles.scss'

import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { StyledBox } from './style'


type UserLinkProps = PropsWithChildren<{
  label?: string
  primary?: boolean
  to: string
}>

export default function UserLink({ children, label, to, ...restProps }: UserLinkProps) {
  return (
    <StyledBox {...restProps}>
      <Link to={to} >
        {children}
        {label}
      </Link>
    </StyledBox>
  )
}


