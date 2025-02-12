import { useState, useEffect } from "react"
import slide1 from "../assets/images/slide1.webp"
import slide2 from "../assets/images/slide2.webp"
import slide3 from "../assets/images/slide3.webp"
import organic from "../assets/images/organic.webp"
import AOS from "aos"
import "aos/dist/aos.css"

const HeadersSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slides = [slide1, slide2, slide3]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    }

      useEffect(() => {
        AOS.init({
          duration: 2000,
          once: false,
        })
      }, [currentIndex])

    return (
        <div className="relative aspect-[6/4] sm:aspect-[7/4] lg:aspect-[16/9] xl:aspect-[20/10] w-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                {slides.map((slide, index) => (
                    <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentIndex === index ? "opacity-100" : "opacity-0"} animate-breathe`}
                        style={{
                            backgroundImage: `url(${slide})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }} />
                ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center z-10">
                <button className="w-20 h-full flex justify-center items-center cursor-default opacity-0" onClick={prevSlide}>
                    <span className="text-2xl">&lt;</span>
                </button>
                <button className="w-20 h-full flex justify-center items-center cursor-default opacity-0" onClick={nextSlide}>
                    <span className="text-2xl">&gt;</span>
                </button>
            </div>
            <div className="absolute top-0 left-[20%] h-full w-[63%] text-white overflow-hidden text-center flex flex-col gap-[20px] xs:gap-[30px] md:gap-[50px] items-center justify-center">
                <img src={organic} alt="Təbii Məhsul" className="w-[50px] xs:w-[100px] md:w-[150px] lg:w-[200px] animate-slideAndRotate opacity-0"/>
                <h1 className="text-[20px] xs:[35px] sm:text-[40px] md:text-[50px] lg:text-[70px] font-[700] font-amatic" data-aos="fade-up">100% TƏBİİ MƏHSUL ÇEŞİDLƏRİ</h1>
                <h4 className="hidden md:block text-[20px] font-[500] font-adventPro" data-aos="fade-up">Təbiətin dərinliklərindən gələn əsrarəngiz dad</h4>
            </div>
        </div>
    )
}

export default HeadersSlider