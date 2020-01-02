import Image from "../components/image"
import Layout from "../components/layout"
import { Link } from "gatsby"
import PostLink from '../components/post-link'
import React from "react"
import SEO from "../components/seo"

const IndexPage = ({
  data : {
    allMdx : {edges}
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
  query blogIndex {
    allMdx {
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