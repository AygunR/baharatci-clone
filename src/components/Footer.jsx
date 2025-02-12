import React, { useContext } from "react"
import ftimg from "../assets/images/footerimg.png"
import icon from "../assets/images/baharatci.webp"
import { FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { DataCntx } from "../dataContext/DataContext"
import { MdKeyboardArrowRight } from "react-icons/md"
import { GrInstagram } from "react-icons/gr"
import { FaTiktok } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  const { data } = useContext(DataCntx)

  return (
    <div className="bg-green">
      <div className="flex flex-col lg:flex-row py-[30px] box-border lg:px-[100px] xl:max-w-[1700px] xl:m-auto gap-[30px]">
        <div className="relative md:mx-[20px] text-[20px]">
          <img src={ftimg} alt="ftimg" className="h-[390px] w-[100%] sm:h-[400px] lg:w-[40vw]" />
          <div className="absolute top-[13%] left-[9%] lg:left-3 xl:left-[10%]">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img src={icon} alt="baharatci" className="w-[400px] lg:w-[300px] mb-[20px] xl:mb-[30px]"/>
            </Link>
            <p className="text-white font-roboto italic mb-[30px] sm:mb-[30px]">100 % təbii məhsullardan hazırlanmışdır.</p>
            <div>
              <div className="flex items-center gap-2 text-white font-roboto mb-[9px]">
                <div className="w-[40px] h-[40px] rounded-full bg-othergreen flex items-center"><FaPhoneAlt className="text-white m-auto" />
                </div>
                <span className="hover:text-white hover:underline text-[16px] xs:text-[20px] cursor-pointer">Tel: +994 010 515 51 59
                </span>
              </div>
              <div className="flex items-center gap-2 text-white font-roboto">
                <div className="w-[40px] h-[40px] rounded-full bg-othergreen flex items-center"><FaLocationDot className="text-white m-auto" />
                </div>
                <span className="hover:text-white hover:underline text-[16px] xs:text-[20px] cursor-pointer">Azərbaycan Bakı
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around lg:justify-between lg:mt-[70px] mx-[30px] lg:gap-[150px] xl:gap-[200px] ">
          <div className="mb-[30px]">
            <h3 className="text-white pb-[15px] font-adventPro font-[700] text-[25px] relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:inline-block before:h-[3px] before:w-[40px] before:bg-[#fe9505] before:rounded-[4px] after:content-[''] after:absolute after:left-[45px] after:w-[10px] after:h-[3px] after:bg-white after:bottom-0 after:inline-block after:rounded-[4px] mb-[20px]">Kateqoriyalar</h3>
            <ul>
              {data.map((item, index) => (
                <li className="text-white font-[400] text-[17px] font-roboto mb-1"
                  onClick={() => window.scrollTo({ top: 0})}
                  key={index}>
                  <MdKeyboardArrowRight className="inline-block" />
                  <span className="relative duration-[0.5s] cursor-pointer after:content-[''] after:absolute after:right-0 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-orange after:duration-[0.5s] hover:after:w-full hover:right-0 hover:text-orange">
                    <Link to={`/məhsullar/${item.category.replace(/\s+/g, "-").toLowerCase()}`}>
                      {item.category}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white pb-[15px] font-adventPro font-[700] text-[25px] relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:inline-block before:h-[3px] before:w-[40px] before:bg-[#fe9505] before:rounded-[4px] after:content-[''] after:absolute after:left-[45px] after:w-[10px] after:h-[3px] after:bg-white after:bottom-0 after:inline-block after:rounded-[4px] mb-[20px]">Bizi izləyin</h3>
            <div className="flex gap-[15px]">
              <a href="https://www.instagram.com/baharatci.az?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"
                className="border-[3px] border-box rounded-[5px] p-[10px] text-white text-[20px] cursor-pointer duration-[0.5s] hover:bg-white hover:border-othergreen hover:text-otherborder-othergreen">
                <GrInstagram />
              </a>
              <a href="https://www.tiktok.com/@baharatci.az?is_from_webapp=1&sender_device=pchttps://www.tiktok.com/@baharatci.az?is_from_webapp=1&sender_device=pc" target="_blank"
                className="border-[3px] border-box rounded-[5px] p-[10px] text-white text-[20px] cursor-pointer duration-[0.5s] hover:bg-white hover:border-othergreen hover:text-otherborder-othergreen">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer