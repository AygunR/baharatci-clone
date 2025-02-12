import React, { useContext } from "react"
import { DataCntx } from "../dataContext/DataContext"
import { TfiClose } from "react-icons/tfi"

const CartForBakset = ({ item }) => {
    const { setBasket } = useContext(DataCntx)

    const increaseCount = () => {
        setBasket(prev => prev.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
    }
    const decreaseCount = () => {
        if (item.quantity > 1) {
            setBasket(prev => prev.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
        }
        else { setBasket(prev => prev.filter(cartItem => cartItem.id !== item.id)) }
    }

    return (
        <div className="flex justify-between mb-[30px] hover:bg-bggray">
            <div className="flex gap-[10px]">
                <img src={`/dataimg/${item.img}`} alt={item.name} className="w-[110px] object-cover" />
                <div className="flex flex-col justify-between">
                    <h3 className="font-[600] font-Montserrat">{item.name} {item.about}</h3>
                    <div className="flex">
                        <button onClick={() => decreaseCount()} className="border-[1px] border-[#e5e7eb] w-[1.5rem]">-</button>
                        <span className="border-y-[1px] border-[#e5e7eb] w-[1.5rem] text-center">{item.quantity}</span>
                        <button onClick={() => increaseCount()} className="border-[1px] border-[#e5e7eb] w-[1.5rem]">+</button>
                    </div>
                    <div className="flex gap-[10px] text-gray-500 text-[12px] items-center">
                        <span>{item.quantity}</span>x
                        <span className="text-base text-[18px] font-[600] text-brown border-b-2 border-othergreen pb-[2px]">{item.price} ₼</span>
                    </div>
                </div>
            </div>
            <TfiClose className="text-lightgray m-[10px]" onClick={() => setBasket(prev => prev.filter(cartItem => cartItem.id !== item.id))} />
        </div>
    )
}

export default CartForBakset