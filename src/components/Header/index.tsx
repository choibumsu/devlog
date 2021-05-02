import { Link } from 'gatsby'
import * as React from 'react'
import './style.scss'

const Header: React.FC = () => (
  <header className="header" data-component>
    <div className="header-wrapper">
      <div className="left"></div>
      <Link to="/" className="title center">
        <h1>ChoiTeemo Devlog</h1>
      </Link>
      <div className="right"></div>
    </div>
  </header>
)

export default Header
