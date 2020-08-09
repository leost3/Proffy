import './styles.scss'

import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import backIcon from '../../assets/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'



type PageHeaderProps = PropsWithChildren<{
  title: string
  description?: string
}>

function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to='/' >
          <img src={backIcon} alt="go back" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  )
}

export default PageHeader