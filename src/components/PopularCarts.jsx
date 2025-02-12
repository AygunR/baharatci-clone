import React, { useContext } from "react"
import { DataCntx } from "../dataContext/DataContext"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay, Navigation } from "swiper/modules"
import Cart from "./Cart"

const PopularCarts = () => {
  const { data } = useContext(DataCntx)
  const popularCards = data.map(item => item.cards).flat().filter(card => card.popularity === true)

  return (
    <div className="max-w-[80%] m-auto my-[50px]">
      <h2 className="text-othergreen font-amatic text-[20px] lg:text-[40px] font-[600] text-center mb-[40px]">ƏN ÇOX SATILANLAR</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          480: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        navigation={{
          delay: 1000,
          prevEl: ".swiper-button-prev-popular",
          nextEl: ".swiper-button-next-popular"
        }}
        className="mySwiper">
        {popularCards.map(card => (
          <SwiperSlide key={card.id}>
            <Cart card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center mt-[20px]">
        <button className="swiper-button-prev-popular">
          <MdOutlineKeyboardArrowLeft className="text-[20px] text-othergreen" />
        </button>
        <button className="swiper-button-next-popular">
          <MdOutlineKeyboardArrowRight className="text-[20px] text-othergreen" />
        </button>
      </div>
    </div>
  )
}

export default PopularCarts