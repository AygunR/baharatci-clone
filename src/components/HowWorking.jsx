import packet from "../assets/images/packet.webp"
import ingredients from "../assets/images/ingredients.webp"
import car from "../assets/images/car.webp"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay } from "swiper/modules"

const HowWorking = () => {
  return (
    <div className="mb-[100px] mt-[50px] max-w-[85%] m-auto">
            <h1 className="text-[30px] sm:text-[55px] text-center font-adventPro font-[700] mb-[50px]">Biz necə işləyirik?</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                breakpoints={{
                    992: { slidesPerView: 3 },
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="relative flex flex-col sm:flex-row lg:flex-col items-center gap-2 justify-center">
                        <div className="relative px-[35px]">
                            <img src={ingredients} alt="ingredients" />
                            <div className="absolute top-0 left-[10px] w-[45px] h-[45px] rounded-full text-white bg-othergreen hover:bg-orange text-[25px] font-[700] font-adventPro flex items-center justify-center">1</div>
                        </div>
                        <div>
                            <p className="font-[700] font-adventPro text-[20px] text-center">Sifariş qəbulu</p>
                            <p className="text-lightgray font-[500] font-roboto text-[1rem] text-center">İlkin olaraq müştərilərin sifarişləri qəbul olunur.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative flex flex-col sm:flex-row lg:flex-col items-center gap-2 justify-center lg:border-r lg:border-l lg:border-dashed lg:px-[20px] border-gray-300">
                        <div className="relative px-[35px]">
                            <img src={packet} alt="packet" />
                            <div className="absolute top-0 left-[10px] w-[45px] h-[45px] rounded-full text-white bg-othergreen hover:bg-orange text-[25px] font-[700] font-adventPro flex items-center justify-center">2</div>
                        </div>
                        <div>
                            <p className="font-[700] font-adventPro text-[20px] text-center">Paketləmə</p>
                            <p className="text-lightgray font-[500] font-roboto text-[1rem] text-center">Müştərinin istəyinə görə məhsul hazırlanır və paketlənir.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative flex flex-col sm:flex-row lg:flex-col items-center gap-2 justify-center">
                        <div className="relative px-[35px]">
                            <img src={car} alt="car" />
                            <div className="absolute top-0 left-0 w-[45px] h-[45px] rounded-full text-white bg-othergreen hover:bg-orange text-[25px] font-[700] font-adventPro flex items-center justify-center">3</div>
                        </div>
                        <div>
                            <p className="font-[700] font-adventPro text-[20px] text-center">Çatdırılma</p>
                            <p className="text-lightgray font-[500] font-roboto text-[1rem] text-center">Müştəri istəyindən asılı olaraq ünvana çatdırılır.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
  )
}

export default HowWorking