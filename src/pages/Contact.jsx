import React, { useEffect } from "react"
import bgimg from "../assets/images/bgimg.png"
import AOS from "aos"
import "aos/dist/aos.css"

const Contact = () => {

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
        <span className="font-adventPro font-[700] absolute top-[40%] left-[10%] text-[6vw] tracking-wide text-green aspect-[25/10] lg:aspect-auto"><span className="text-orange">Ə</span>laqə</span>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000"
      className="grid grid-cols-1 md:grid-cols-2 gap-[20px] items-center max-w-[90%] m-auto my-[100px] lg:max-w-[80%]">
        <form action="" className="flex flex-col gap-[20px] md:gap-[35px]">
          <h1 className="text-[5vw] font-adventPro font-bold text-left">Bizimlə Əlaqə</h1>
          <input type="text" placeholder="Sizin Adınız" className="border border-1 p-[25px] outline-none" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:flex-row">
            <input type="email" placeholder="Sizin Email" className="border border-1 p-[25px] outline-none" />
            <input type="tel" placeholder="Sizin Nömrəniz" className="border border-1 p-[25px] outline-none" />
          </div>
          <textarea placeholder="Sizin Mesajınız" className="border border-1 px-[30px] pb-[70px] pt-[20px] outline-none"></textarea>
          <button className="bg-othergreen text-white border-0 rounded-[20px] w-[150px] p-[10px] text-center font-semibold shadow-[5px_5px_0px_rgba(0,0,0,0.14)]">Mesaj Göndər</button>
        </form>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.18588939853!2d49.85495959999998!3d40.39459249999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1734545127183!5m2!1sen!2saz"
            width="100%"
            height="700"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact