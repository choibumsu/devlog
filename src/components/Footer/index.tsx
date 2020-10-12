import * as React from 'react'
import './style.scss'

const Footer: React.FC = () => (
  <footer className="footer" data-component>
    <div className="footer-wrapper">
      <article className="strong">
        Author.{' '}
        <a href="https://www.github.com/choibumsu" target="_blank">
          ChoiTeemo (@choibumsu)
        </a>
      </article>
      <article>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com" target="_blank">
          Gatsby
        </a>
      </article>
    </div>
  </footer>
)

export default Footer
