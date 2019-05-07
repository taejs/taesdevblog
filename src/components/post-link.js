import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div class="post-link">
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title}
    </Link>
    <time>{post.frontmatter.date}</time>
    <p>{post.excerpt}</p>
  </div>
)

export default PostLink