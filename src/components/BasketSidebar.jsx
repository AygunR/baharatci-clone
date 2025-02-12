import React, { useContext, useEffect } from "react"
import { DataCntx } from "../dataContext/DataContext"
import { TfiClose } from "react-icons/tfi"
import { Link, useLocation } from "react-router-dom"
import CartForBakset from "./CartForBakset"
import { BsBasket } from "react-icons/bs"

const BasketSidebar = () => {
    const { isBasketOpen, setIsBasketOpen, basket, getTotalPrice } = useContext(DataCntx)
    const location = useLocation()

    useEffect(() => {
        setIsBasketOpen(false)
    }, [location, setIsBasketOpen])

    let totalPrice = getTotalPrice()

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[50] transition-opacity duration-300 ease-in-out ${isBasketOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsBasketOpen(false)}>
            </div>

            <div className={`fixed top-0 right-0 w-[300px] xs:w-[450px] h-[100vh] bg-white overflow-hidden z-[60] transform transition-transform duration-[1s] ease-in-out ${isBasketOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center px-[20px] py-[15px] border-b-[1px] border-black">
                        <span className="text-[20px] font-Montserrat font-[600]">Səbətiniz</span>
                        <TfiClose className="text-[20px] font-[500] cursor-pointer" onClick={() => setIsBasketOpen(false)} />
                    </div>
                    <div className="px-[20px] pt-[30px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        {basket.length === 0 ? (
                            <div className="text-center text-gray-500">
                                <BsBasket className="text-[150px] sm:text-[200px] mx-auto mt-[19vh] mb-[30px] text-othergreen" />
                                <span className="font-Montserrat">Səbətiniz boşdur</span>
                            </div>
                        ) : (
                            basket.map((item) => (
                                <CartForBakset key={item.id} item={item} />
                            ))
                        )}
                    </div>
                    <div className="px-[20px] py-[15px] mt-auto">
                        <div className="flex justify-between items-center mb-[10px]">
                            <span className="text-[16px] font-Montserrat font-[700]">Ümumi:</span>
                            <span className="font-[700] font-Montserrat border-b-2 border-othergreen pb-[3px]">{totalPrice.toFixed(2)} ₼</span>
                        </div>
                        <Link to="basket" className="block w-full py-[10px] mb-[10px] border-[1px] font-[600] border-othergreen text-black font-Montserrat text-[17px] hover:bg-gray-100 duration-[0.3s] text-center"onClick={() => window.scrollTo({ top: 0})}>
                            Səbətə keç
                        </Link>
                        <button className="w-full py-[10px] text-white font-[600] bg-othergreen font-Montserrat text-[17px]">Rəsmiləşdir</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasketSidebar