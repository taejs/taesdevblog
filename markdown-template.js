// markdown-template.js

import Layout from './src/components/layout';
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react"
import { graphql } from "gatsby"
import { Styled } from 'theme-ui'
import SEO from './src/components/seo';

export default function Template({ data: { mdx } }) {
  return (
    <Layout>
        <SEO title={mdx.frontmatter.title} keywords={mdx.frontmatter.keywords} description={mdx.excerpt}/>
        <div class="post">
            <h1>{mdx.frontmatter.title}</h1>
            <time>{mdx.frontmatter.date}</time>
            <div>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt(pruneLength: 150)
      frontmatter {
        title
        keywords
      }
    }
  }
`