import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { DataCntx } from "../dataContext/DataContext"
import { IoIosArrowDown } from "react-icons/io"
import "aos/dist/aos.css"

const Menu = () => {
    const { data } = useContext(DataCntx)

    return (
        <ul className="flex gap-[35px] items-center">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-orange border-l-2 border-orange pl-2 box-border duration-[0.3s]" : "text-black"}>
                <li className="hover:text-orange duration-[0.3s]"
                    onClick={() => window.scrollTo({ top: 0 })}>Ana səhifə</li>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange border-l-2 border-orange pl-2 box-border duration-[0.3s]" : "text-black"}>
                <li className="hover:text-orange duration-[0.3s]" onClick={() => window.scrollTo({ top: 0 })}>Haqqımızda</li>
            </NavLink>
            <li className="relative group flex items-center gap-[5px] text-black cursor-pointer">Məhsullar
                <IoIosArrowDown className="text-black" />
                <div className="absolute left-[-15px] top-[40px] w-[170px] bg-white text-black z-[50] rounded max-h-0 overflow-hidden opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-[0.4s]">
                    <ul className="flex flex-col gap-[0.6rem] p-[15px]">
                        {data.map((item, index) => (
                            <li key={index}>
                                <NavLink to={`/məhsullar/${item.category.replace(/\s+/g, "-").toLowerCase()}`}
                                    className={({ isActive }) => isActive ? "text-orange" : "text-black hover:text-orange duration-[0.2s]"}
                                    onClick={() => window.scrollTo({ top: 0 })}>
                                    {item.category}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange border-l-2 border-orange pl-2 box-border duration-[0.3s]" : "text-black"}>
                <li className="hover:text-orange duration-[0.3s]"
                    onClick={() => window.scrollTo({ top: 0 })}>Əlaqə</li>
            </NavLink>
        </ul>
    )
}

export default Menu