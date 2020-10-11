import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '@/components/Header'
import '@/styles/reset.scss'
import '@/styles/base.scss'
import './style.scss'

type LayoutProps = {
  children: JSX.Element[]
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout" data-component>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container">
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
