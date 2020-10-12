import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/Image'
import Seo from '../components/Seo'

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Home" />
    <Link to="/welcome">welcome</Link>
  </Layout>
)

export default IndexPage
