import React, { useContext, useEffect, useState } from "react"
import CartForBakset from "../components/CartForBakset"
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
import { DataCntx } from "../dataContext/DataContext"
import { BsBasket } from "react-icons/bs"

const Basket = () => {
  const { basket, getTotalPrice, getItemsQuantity } = useContext(DataCntx)
  let totalPrice = getTotalPrice()
  let itemsQuantity = getItemsQuantity()

  const [promoCode, setPromoCode] = useState("")
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice)

  useEffect(() => {
    if (basket.length === 0) {
      setDiscountedPrice(0)
    }
  }, [basket])

  const handlePromoCode = () => { promoCode === "Aygun50" ? setDiscountedPrice(totalPrice * 0.5) : alert("Yanlış promo kodu!") }

  return (
    <>
      <h1 className="text-[30px] sm:text-[50px] text-othergreen font-Montserrat my-[50px] font-bold text-center">Səbətiniz</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-[50px] lg:gap-0 w-[70%] m-auto mb-[100px]">
        <div className="flex flex-col gap-[30px] w-full lg:w-[60%]">
          {basket.length === 0 ? (
            <div className="flex flex-col gap-4 justify-center items-center text-gray-500">
              <BsBasket className="text-[150px] sm:text-[220px] mt-[10vh] text-green" />
              <span className="font-Montserrat">Səbətiniz boşdur</span>
            </div>
          ) : (
            basket.map((item) => (
              <CartForBakset key={item.id} item={item} />
            ))
          )}
        </div>
        <div className="border w-full lg:w-[30%] h-full py-[25px] px-[20px] flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[5px] border-b-[1px] border-gray-200 pb-[18px]">
            <p className="text-orange font-bold font-Montserrat text-[20px] mb-[15px]">Sifariş məbləği</p>
            <div className="flex justify-between">
              <p className="text-gray-400 font-[500] font-Montserrat text-[1rem] mb-[7px]">Məhsulların sayı :</p>
              <span className="text-gray-400 font-[500] font-Montserrat text-[1rem]">{itemsQuantity}</span>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400 font-[500] font-Montserrat text-[1rem]">Məbləğ :</p>
              <span className="font-[500] font-Montserrat">{totalPrice.toFixed(2)} ₼</span>
            </div>
          </div>
          <div className="pt-[15px] flex flex-col gap-[19px]">
            <div className="flex justify-between">
              <p className="text-othergreen font-[600] font-Montserrat text-[1.1rem] mb-[15px]">Yekun məbləğ :</p>
              <span className="font-[500] font-Montserrat">{discountedPrice.toFixed(2)} ₼</span>
            </div>
            <p className="text-gray-600 font-[500] font-Montserrat text-[1rem]">Promo kod</p>
            <input type="text" className="p-[10px] text-green font-[600] font-Montserrat text-[17px] border-2 border-gray-300 outline-none"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)} />
            <button className="py-[10px] text-green font-[600] font-Montserrat text-[17px] border-2 border-green"
              onClick={handlePromoCode}>Kodu əlavə et</button>
            <button className="py-[10px] text-white font-[600] bg-othergreen font-Montserrat text-[17px]">Rəsmiləşdir</button>
            <Link to="/" className="text-green text-center font-[500] font-Montserrat underline hover:no-underline" onClick={() => window.scrollTo({ top: 0 })}>Alış verişə davam et <FaArrowRightLong className="inline" /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Basket