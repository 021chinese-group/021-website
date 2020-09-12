import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

export default function article({ data }) {
  const {
    allContentfulArticle: { nodes: articles },
  } = data
  console.log(articles[1].content.content)
  return (
    <Layout>
      <div>
        <div>the second article: {articles[1].title}</div>
        <Image fluid={articles[1].images[0].fluid} alt="loading"></Image>
        {/* <div>{articles[1].content}</div> */}
        <Link to={`/article/${articles[1].slug}`}>go to the article page</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulArticle {
      nodes {
        title
        content {
          content
        }
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`
