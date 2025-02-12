import React, { useContext, useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { DataCntx } from "../dataContext/DataContext"
import { IoIosArrowForward } from "react-icons/io"
import { IoMdCloseCircle } from "react-icons/io"
import icon from "../assets/images/baharatci.webp"
import "aos/dist/aos.css"

const SideMenu = () => {
    const { data, sideMenuOpen, setSideMenuOpen } = useContext(DataCntx)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setSideMenuOpen(false)
    }, [location, setSideMenuOpen])

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[50] transition-opacity duration-300 ease-in-out ${sideMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setSideMenuOpen(false)}>
            </div>
            
            <div className={`fixed top-0 left-0 w-[300px] xs:w-[300px] sm:w-[500px] h-full bg-white z-50 transform transition-all duration-[0.6s] ease-in-out lg:hidden ${sideMenuOpen ? "translate-x-0" : "translate-x-[-300px] xs:translate-x-[-500px]"}`}>
                <div className="flex justify-end items-center pt-[30px] pr-[25px]">
                    <IoMdCloseCircle className="text-[35px] text-othergreen cursor-pointer" onClick={() => setSideMenuOpen(false)} />
                </div>
                <div className="flex items-baseline gap-2 pl-[20px] mt-[20px]">
                    <img src={icon} alt="baharatci" className="w-[300px]" />
                </div>
                <div className="pl-[30px] mt-[50px]">
                    <ul className="flex flex-col gap-[20px] font-[700] text-[19px] font-adventPro">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-orange duration-[0.3s]" : "text-black"}>
                            <li className="hover:text-orange duration-[0.3s] flex items-center gap-1"
                                onClick={() => window.scrollTo({ top: 0 })}><IoIosArrowForward />Ana səhifə</li>
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange duration-[0.3s]" : "text-black"}>
                            <li className="hover:text-orange duration-[0.3s] flex items-center gap-1" onClick={() => window.scrollTo({ top: 0 })}><IoIosArrowForward />Haqqımızda</li>
                        </NavLink>
                        <li className="relative flex items-center gap-[5px] text-black cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}><IoIosArrowForward className={`text-black ${isDropdownOpen ? "rotate-90" : ""} transition-transform`} />Məhsullar
                            <div className={`absolute left-[15px] top-[35px] w-[150px] xs:w-[170px] bg-white text-black rounded max-h-0 overflow-hidden opacity-0 transition-all duration-[0.2s] ${isDropdownOpen ? "max-h-[300px] opacity-100" : ""}`}>
                                <ul className="flex flex-col gap-[0.6rem] px-[15px]">
                                    {data.map((item, index) => (
                                        <li key={index}>
                                            <NavLink to={`/məhsullar/${item.category.replace(/\s+/g, "-").toLowerCase()}`}
                                                className={({ isActive }) => isActive ? "text-orange" : "text-black hover:text-orange duration-[0.2s]"}
                                                onClick={() => {
                                                    window.scrollTo({ top: 0 })
                                                    closeSidebar()
                                                }} >
                                                {item.category}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange duration-[0.3s]" : "text-black"}>
                            <li className={`hover:text-orange duration-[0.3s] flex items-center gap-1 ${isDropdownOpen ? "mt-[220px]" : ""}`}
                                onClick={() => window.scrollTo({ top: 0 })}><IoIosArrowForward />Əlaqə</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideMenu