import { Link } from 'gatsby'
import * as React from 'react'
import './style.scss'

type HeaderProps = {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header className="header" data-component>
    <div className="header-wrapper">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

export default Header
