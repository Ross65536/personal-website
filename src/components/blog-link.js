import React from "react"
import { Link } from "gatsby"
import './blog-link.scss'

const BlogLink = ({ post }) => (
  <li class="blog-link">
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </li>
)
export default BlogLink