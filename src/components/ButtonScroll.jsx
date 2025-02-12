import { useState, useEffect } from "react"
import { IoIosArrowUp } from "react-icons/io"

const ButtonScroll = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200 ? true : false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`fixed bottom-[20px] right-[20px] z-50 transition-all duration-500 md:bottom-[30px] md:right-[30px] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-80px]"}`}>
      <div className="relative w-[55px] h-[55px] flex p-[7px] justify-center items-center md:w-[70px] md:h-[70px]">
        <div className="absolute w-full h-full border-[3px] border-othergreen border-dashed rounded-[50%] overflow-hidden animate-spinslow"></div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-othergreen relative text-[20px] md:text-[30px] rounded-[50%] flex justify-center items-center w-full h-full font-bold z-40">
          <IoIosArrowUp className="text-white" />
        </button>
      </div>
    </div>
  )
}

export default ButtonScroll