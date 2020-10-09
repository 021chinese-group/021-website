import React from "react"
import marked from "marked"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

function MDToHTML(props) {
  const getMarkdownText = md => {
    var rawMarkup = marked(md, { sanitize: true })
    return { __html: rawMarkup }
  }
  return <div dangerouslySetInnerHTML={getMarkdownText(props.md)} />
}

export default function articleTemplate({ data }) {
  return (
    <Layout>
      <MDToHTML md={data.article.content.content} />
    </Layout>
  )
}

export const query = graphql`
  query GetSingleArticle($slug: String) {
    article: contentfulArticle(slug: { eq: $slug }) {
      content {
        content
      }
      slug
      title
    }
  }
`
