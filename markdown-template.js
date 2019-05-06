// markdown-template.js
import React from "react"
import { graphql } from "gatsby"
import Layout from './src/components/layout' 

export default function Template({data}) {
  const { markdownRemark: { frontmatter, html } } = data;
  return (
    <Layout>
        <div class="post">
            <h1>{frontmatter.title}</h1>
            <time>{frontmatter.date}</time>
            <div
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "YYYY년 MM월 DD일")
        title
      }
    }
  }
`