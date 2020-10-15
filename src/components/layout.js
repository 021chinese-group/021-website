import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Header from "./Header"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    // color: ${props => (props.theme === "purple" ? "purple" : "white")};
  }
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle theme="purple"></GlobalStyle>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
