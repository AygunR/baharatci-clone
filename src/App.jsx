import React from "react"
import MainLayout from "./layout/MainLayout"
import DataContext from "./dataContext/DataContext"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import "./App.css"
import Error from "./pages/Error"
import Details from "./pages/Details"
import Basket from "./pages/Basket"

const App = () => {
  return (
    <>
      <DataContext>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="/məhsullar/:category" element={<Products/>}/>
              <Route path="/details/:id" element={<Details />} />
              <Route path="contact" element={<Contact/>}/>
              <Route path="basket" element={<Basket/>}/>
            </Route>
              <Route path="*" element={<Error/>}/>
          </Routes>
        </Router>
      </DataContext>
    </>
  )
}

export default App