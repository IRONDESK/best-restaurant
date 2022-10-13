import React from "react"
import Title from "./partials/Title"
import Header from "./partials/Header"
import Footer from "./partials/Footer"

function Layout({ children }: { children: JSX.Element }) {
  return (
    <main>
      <Title />
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
