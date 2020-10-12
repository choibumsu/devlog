import { Link } from 'gatsby'
import * as React from 'react'
import './style.scss'

type HeaderProps = {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header className="header" data-component>
    <div className="header-wrapper">
      <div className="left"></div>
      <Link to="/" className="title center">
        <i className="laptop-icon f7-icons">device_laptop</i>
        <h1>{siteTitle}</h1>
      </Link>
      <div className="right"></div>
    </div>
  </header>
)

export default Header
