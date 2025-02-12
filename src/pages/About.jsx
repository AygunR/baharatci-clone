import React, { useEffect } from "react"
import bgimg from "../assets/images/bgimg.png"
import symbol from "../assets/images/abouticon.png"
import AOS from "aos"
import "aos/dist/aos.css"

const About = () => {

  useEffect(() =>{
    AOS.init({
      duration: 1000,
      once: false,
    })
  },[])

  return (
    <div>
      <div className="relative" data-aos="fade-up">
        <img src={bgimg} alt="bgimg" className="w-full shadow-[0_-7px_7px_1px_#e8e7e7]" />
        <span className="font-adventPro font-[700] absolute top-[40%] left-[10%] text-[6vw] tracking-wide text-green"><span className="text-orange">H</span>aqqımızda</span>
      </div>

      <div className="bg-lightOrange py-[130px]">
        <div className="bg-white max-w-desktop m-auto py-[60px] px-[30px]" data-aos="fade-up" data-aos-duration="5000">
          <div className="mb-[20px]">
            <h1 className="font-adventPro font-[300] text-[25px] md:text-[35px] xl:text-[55px] text-center text-orange tighter">Haqqımızda</h1>
            <img src={symbol} alt="icon" className="m-auto" />
          </div>
          <div className="text-[17px] text-center lg:text-left">
            <p className="mb-[15px] leading-6 text-lightgray" >Baharatcı.az, ədviyyat satışı saytı olaraq sizlərə səmimi və keyfiyyətli xidmət təklif edir. Biz, sizi mükəmməl yemək təcrübəsinin ən vacib hissəsi olan baharatlarla tanış etmək üçün burdayıq.</p>
            <p className="mb-[15px] leading-6 text-lightgray" >Ağıllı telefonunuz, tabletiniz və ya kompüteriniz vasitəsi ilə Baharatcı.az saytından, xidmətlər və eləcə də endirim və kampaniya haqqında yeniliklərdən xəbərdar ola bilərsiniz.</p>
            <p className="mb-[15px] leading-6 text-lightgray" >Bizimlə əlaqədə olun və mükəmməl bir yemək təcrübəsi üçün ən yaxşı ədviyyatları almağa başlayın. Baharatcı.az ədviyyatlarımız ilə mükəmməl bir təcrübə təmin edir.</p>
            <p className="mb-[15px] leading-6 text-lightgray" >Baharatcı.az, ədviyyat satışı üzrə sayt olaraq sizlərə yalnız ən yaxşı məhsulları təqdim edir. Məqsədimiz, müştərilərimizin istəklərini qarşılamak və onların gözləntilərini üstünlükləri səviyyəsində qarşılamaktır.Bütün ədviyyatlarımız təbii və organikdir, çünki sizin sağlamlığınız bizim üçün çox vacibdir. Bizim məqsədimiz, sizə mükəmməl bir təcrübə təqdim etməkdir. Bu səbəbdən biz, yüksək keyfiyyətli ədviyyatları sizə çatdırmaq, satmaq və xidmət etmək üçün səmimi şəkildə çalışırıq.</p>
            <p className="mb-[15px] leading-6 text-lightgray" >Ədviyyatlarımızı bizim saytımızdan asanlıqla tapa bilərsiniz. Həmçinin bizim saytımızda, müxtəlif baharatların və ədviyyatların istifadə qaydaları, tərkib və kaloriliyi detallı şəkildə təqdim edilir. Bütün bu məlumatlar, məhsullarımızı daha da dəyərləndirir və siz müştərilərimizə daha yaxşı məhsullar almağı təmin edirik.</p>
            <p className="mb-[15px] leading-6 text-lightgray" >Son söz kimi, bizimlə əlaqə yaradaraq mükəmməl bir yemək təcrübəsi və ən yaxşı ədviyyatları almaq üçün ən doğru addımı atacaqsınız. Baharatcı.az ilə mükəmməl yemək hazırlayın.</p>
            <p className="mb-[15px] leading-6 text-lightgray" >Bizim saytımızda, səhətinizi bərpa etmək üçün vacib olan bəzi maddələri tapa bilərsiniz. Ədviyyatlarımızın hər biri, sizin səhhətinizi təmin etmək üçün seçilmişdir.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About