import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

export default function article({ data }) {
  const {
    allContentfulArticle: { nodes: articles },
  } = data
  console.log(articles[0].content.content)
  return (
    <Layout>
      <div>
        <div>the second article: {articles[0].title}</div>
        {/* <Image fluid={articles[0].images[0].fluid} alt="loading"></Image> */}
        {/* <div>{articles[1].content}</div> */}
        <Link to={`/article/${articles[0].slug}`}>go to the article page</Link>
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
        slug
      }
    }
  }
`

// export const query = graphql`
//   {
//     allContentfulArticle {
//       nodes {
//         title
//         content {
//           content
//         }
//         images {
//           fluid {
//             ...GatsbyContentfulFluid
//           }
//         }
//         slug
//       }
//     }
//   }
// `
