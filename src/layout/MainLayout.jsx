import React, { useContext } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import { DataCntx } from "../dataContext/DataContext"
import ButtonScroll from "../components/ButtonScroll"

const MainLayout = () => {
  const { loading } = useContext(DataCntx)

  if (loading) return <div className="loader-container">
    <div className="loader"></div>
  </div>

  return (
    <>
      <Header />
      <Outlet />
      <ButtonScroll />
      <Footer />
    </>
  )
}

export default MainLayout