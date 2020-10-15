import React from "react"
import { Link } from "gatsby"
import Tab from "./Tab"
import LinkStyle from "./LinkStyle"
import LinkStyle2 from "./LinkStyle2"

export default function Navbar() {
  return (
    <>
      <Tab>
        <LinkStyle>
          <LinkStyle2 href="/">Home</LinkStyle2>
        </LinkStyle>
        <LinkStyle>
          <LinkStyle2 href="/project">Projects</LinkStyle2>
        </LinkStyle>
        <LinkStyle>
          <LinkStyle2 href="/article">Articles</LinkStyle2>
        </LinkStyle>
        <LinkStyle>
          <LinkStyle2 href="/contact">Contact Us</LinkStyle2>
        </LinkStyle>
      </Tab>
    </>
  )
}
