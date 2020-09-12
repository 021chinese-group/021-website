import React from "react"
import { Link } from "gatsby"
import Tab from "./Tab"

export default function Navbar() {
  return (
    <>
      <Tab>
        <Link to="/">Home</Link>
      </Tab>
      <Link to="/project">Projects</Link>
      <Link to="/article">Articles</Link>
      <Link to="/contact">Contact Us</Link>
    </>
  )
}
