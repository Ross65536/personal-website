import React from "react"
import BlogLink from "../components/blog-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <BlogLink key={edge.node.id} post={edge.node} />)
    return <Layout>
        <SEO title="Blog" />
        Here you will find my blog-posts, in descending date order.
        <br/>
        <div class="mt-3">
            {Posts}
        </div>
    </Layout>
}
export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            slug
            title
          }
        }
      }
    }
  }
`