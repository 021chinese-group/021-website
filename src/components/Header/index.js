import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const ql = graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `
  const data = useStaticQuery(ql)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default Header
