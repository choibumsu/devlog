import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Image from '../components/Image'
import Seo from '../components/Seo'

type MarkdownProps = {
  data: {
    allMarkdownRemark: {
      edges: [
        node: {
          frontmatter: {
            title: string
            date: Date
            path: string
          }
          excerpt: string
        }
      ]
    }
  }
}

const IndexPage: React.FC<MarkdownProps> = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Link to="/welcome">{data}</Link>
    <div>{data.allMarkdownRemark}</div>
  </Layout>
)

export default IndexPage

export const postSummaryQuery = graphql`
  query($fields: [MarkdownRemarkFieldsEnum], $order: [SortOrderEnum], $summaryLength: Int) {
    allMarkdownRemark(sort: { fields: $fields, order: $order }) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY년 MM월 DD일")
            path
            title
          }
          excerpt(pruneLength: $summaryLength)
        }
      }
    }
  }
`
