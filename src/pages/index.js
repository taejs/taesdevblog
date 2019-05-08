import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostLink from '../components/post-link'
const IndexPage = ({
  data : {
    allMarkdownRemark : {edges}
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => 
        <PostLink key={edge.node.id} post={edge.node}/>
    )
  return(
    <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="posts">{Posts}</div>
  </Layout>
)}  

export default IndexPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`