import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Header from "./Header"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
    margin: 0 25px;
  }
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle theme="purple" />
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
