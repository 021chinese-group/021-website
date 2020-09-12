import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Header from "./Header"
import "./Layout.css"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
