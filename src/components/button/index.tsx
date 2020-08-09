import './styles.scss'

import React, { PropsWithChildren } from 'react'


type ButtonProps = PropsWithChildren<{
  type?: 'button' | 'submit' | 'reset'
}>

export function Button({ type, children }: ButtonProps) {
  return (
    <button type={type}>
      {children}
    </button>
  )
}
