import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div class="post-link">
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
    <p>{post.frontmatter.summary}</p>
  </div>
)

export default PostLink