import React, { useContext, useEffect } from "react"
import bgimg from "./../assets/images/bgimg.png"
import AOS from "aos"
import "aos/dist/aos.css"
import { useNavigate, useParams } from "react-router-dom"
import { DataCntx } from "../dataContext/DataContext"
import ProdDetCarts from "../components/ProdDetCarts"

const Products = () => {
  const { data } = useContext(DataCntx)
  const { category } = useParams()
  const navigate = useNavigate()

  const editedcategory = category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')
  const products = data.filter(item => item.category === editedcategory)

  useEffect(() => {
    if (!data.some(item => item.category === editedcategory)) {
      navigate("/error")
    }
  }, [category, data, navigate])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <div>
      <div className="relative" data-aos="fade-up">
        <img src={bgimg} alt="bgimg" className="w-full shadow-[0_-7px_7px_1px_#e8e7e7]" />
        <span className="font-adventPro font-[700] absolute top-[35%] left-[6%] text-[6vw] tracking-wide text-green">
            <span className="text-orange">{editedcategory.charAt(0)}</span>
            {editedcategory.slice(1)}
        </span>
      </div>
      <ProdDetCarts products={products} />
    </div>
  )
}

export default Products