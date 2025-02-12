import { useContext, useEffect, useState } from "react"
import { DataCntx } from "../dataContext/DataContext"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaTruck } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import icon from '../assets/images/baharatci.webp'
import { BsFillBasket3Fill } from "react-icons/bs"
import { Link } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GiHamburgerMenu } from "react-icons/gi"
import Menu from "./Menu"
import SideMenu from "./SideMenu"
import Search from "./Search"
import BasketSidebar from "./BasketSidebar"

const Header = () => {
  const { setSideMenuOpen, setIsBasketOpen, basket, getItemsQuantity } = useContext(DataCntx)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  let itemsQuantity = getItemsQuantity()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 992) {
        if (window.scrollY > 150) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <div className="bg-orange font-roboto text-[13px]">
        <div className="flex flex-col md:flex-row justify-between items-center py-[5px] px-[30px] max-w-screen-xl m-auto">
          <div className="text-white font-light hidden md:flex justify-between items-center gap-2">
            <FaTruck className="text-[20px]" />Şəhər daxili ödənişsiz çatdırılma
          </div>
          <div className="flex flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-1 text-white font-light">
              <FaPhoneAlt /> Tel: +994 010 515 51 59
            </div>
            <div className="hidden md:flex items-center gap-1 text-white font-light">
              <MdEmail /> Email: info@baharatci.com
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-[#fffffff5] font-[700] text-[19px] shadow-xl font-adventPro duration-[0.4s] ${isSticky ? "fixed top-0 left-0 right-0 z-[20] transition-all ease-in-out" : "top-[-100px]"} `}>
        <div className="max-w-desktop m-auto flex items-center justify-between py-[20px] px-[15px] xs:px-[60px]">
          <Link to="/" data-aos="fade-right" className="flex items-center justify-center w-[45vw] xs:w-[30vw] md:w-[200px]" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src={icon} alt="baharatci" />
          </Link>
          <nav className="hidden lg:block">
            <Menu />
          </nav>
          <div className="flex gap-3 xs:gap-[30px] items-center" data-aos="fade-left">
            <FiSearch className="text-orange cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)} />
            <div className="relative">
              <BsFillBasket3Fill className="text-orange cursor-pointer" onClick={() => setIsBasketOpen(true)} />
              {basket.length > 0 && (
                <div className="absolute font-Montserrat font-[500] top-[-10px] right-[-11px] w-4 h-4 bg-othergreen text-[12px] text-white rounded-full flex items-center justify-center">
                  {itemsQuantity}
                </div>
              )}
            </div>
            <GiHamburgerMenu className="text-orange text-[25px] block lg:hidden cursor-pointer" onClick={() => setSideMenuOpen(true)} />
          </div>
        </div>
        <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      </div>
      <SideMenu />
      <BasketSidebar />
    </div>
  )
}

export default Header