import { useContext } from "react"
import { DataCntx } from "../dataContext/DataContext"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import Cart from './Cart'

const DiscountCards = () => {
    const { data } = useContext(DataCntx)
    const discountCards = data.map(item => item.cards).flat().filter(card => card.endirim != 0)

    return (
        <div className="max-w-[80%] m-auto my-[50px]">
            <h2 className="text-othergreen font-amatic text-[20px] lg:text-[40px] font-[600] text-center mb-[40px]">ENDİRİMLİ MƏHSULLAR</h2>
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
                    prevEl: ".swiper-button-prev-discount",
                    nextEl: ".swiper-button-next-discount"
                }}>
                {discountCards.map(card => (
                    <SwiperSlide key={card.id}>
                        <Cart card={card} showDiscount={true}/>
                    </SwiperSlide>
                ))}
                <div className="flex items-center justify-center mt-[20px]">
                    <button className="swiper-button-prev-discount">
                        <MdOutlineKeyboardArrowLeft className="text-[20px] text-othergreen" />
                    </button>
                    <button className="swiper-button-next-discount">
                        <MdOutlineKeyboardArrowRight className="text-[20px] text-othergreen" />
                    </button>
                </div>
            </Swiper>
        </div>
    )
}

export default DiscountCards