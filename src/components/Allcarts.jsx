import { useContext, useState } from "react"
import { MdOutlineAddShoppingCart } from "react-icons/md"
import { DataCntx } from "../dataContext/DataContext"
import Swal from "sweetalert2"

const Allcarts = () => {
    const { data, basket, setBasket } = useContext(DataCntx)
    const [category, setCategory] = useState(null)
    const [visibleCount, setVisibleCount] = useState(6)
    const filteredData = category ? data.filter(item => item.category === category) : data
    const flatCards = filteredData.flatMap(item => item.cards)
    const visibleCards = flatCards.slice(0, visibleCount)

    const sendToBasket = (id) => {
        let findCard = flatCards.find(item => item.id === id)
        if (basket.some(item => item.id === id)) {
            setBasket(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
        }
        else {
            setBasket(prev => [...prev, { ...findCard, quantity: 1 }])
        }
    }

    const showSuccessAlert = () => {
        Swal.fire({
            icon: 'success',
            title: '',
            html: `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width:1 text-align: center;"><i class="fa fa-check-circle" style="font-size: 100px; color: #4CAF50;"></i>
            <svg id="Layer_1" data-name="Layer 1" fill="#4CAF50" width="70px" height="70px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 111.85"><title>cart</title><path d="M4.06,8.22A4.15,4.15,0,0,1,0,4.06,4.13,4.13,0,0,1,4.06,0h6A19.12,19.12,0,0,1,20,2.6c5.44,3.45,6.41,8.38,7.8,13.94h91a4.07,4.07,0,0,1,4.06,4.06,5,5,0,0,1-.21,1.25L112.06,64.61a4,4,0,0,1-4,3.13H41.51c1.46,5.41,2.92,8.32,4.89,9.67C48.8,79,53,79.08,59.93,79h47.13a4.06,4.06,0,0,1,0,8.12H60c-8.63.1-13.94-.11-18.2-2.91s-6.66-7.91-8.95-17h0L18.94,14.46c0-.1,0-.1-.11-.21a7.26,7.26,0,0,0-3.12-4.68A10.65,10.65,0,0,0,10,8.22H4.06Zm80.32,25a2.89,2.89,0,0,1,5.66,0V48.93a2.89,2.89,0,0,1-5.66,0V33.24Zm-16.95,0a2.89,2.89,0,0,1,5.67,0V48.93a2.89,2.89,0,0,1-5.67,0V33.24Zm-16.94,0a2.89,2.89,0,0,1,5.66,0V48.93a2.89,2.89,0,0,1-5.66,0V33.24Zm41.72-8.58H30.07l9.26,34.86H105l8.64-34.86Zm2.68,67.21a10,10,0,1,1-10,10,10,10,0,0,1,10-10Zm-43.8,0a10,10,0,1,1-10,10,10,10,0,0,1,10-10Z"/></svg></div>`,
            showConfirmButton: false,
            background: '#fff',
            timer: 1000,
        })
    }

    return (
        <div className="max-w-[90%] lg:max-w-[80%] m-auto pb-[50px]">
            <h2 className="hidden text-othergreen font-amatic text-[40px] font-[600] text-center my-[60px] lg:block lg:text-[50px]">100% TƏBİİ MƏHSULLAR</h2>
            <h2 className="text-center font-adventPro font-[700] text-[2.2rem] my-[30px] lg:hidden m-auto">Çeşidlər</h2>
            <div className="xs:grid gap-[25px] grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-[2rem] col-span-2 md:col-span-3 md:m-8 lg:col-span-1 lg:grid-cols-1 lg:row-span-2 lg:m-0">
                    {data.map((item, index) => (
                        <button onClick={() => {
                            setCategory(item.category)
                            setVisibleCount(6)
                        }}
                            className="cursor-pointer text-[1.5rem] font-bold text-gray-800 border-2 border-othergreen rounded-lg text-center font-adventPro py-[15px] transition duration-400 hover:bg-othergreen hover:text-white w-full max-w-[300px] mx-auto flex justify-center items-center h-[95px] leading-[1.5]"
                            key={index}>
                            {item.category}
                        </button>
                    ))}
                </div>

                <h2 className="text-othergreen font-amatic text-[40px] font-[600] text-center mt-[40px] col-span-2 md:col-span-3 lg:hidden">100% TƏBİİ MƏHSULLAR</h2>

                {visibleCards.map(card => (
                    <div key={card.id} className="border-[2px] border-othergreen rounded-[10px] overflow-hidden relative border-box after:content-[''] after:absolute after:inset-[-2px] after:bg-bgafter after:opacity-0 hover:after:opacity-100 after:duration-[0.4s] group my-[30px] xs:my-[0] w-full m-auto">
                        <button onClick={() => {
                            sendToBasket(card.id)
                            showSuccessAlert()
                        }}
                            className="flex items-center justify-center gap-2 bg-othergreen text-white text-[14px] rounded-full font-[500] font-roboto absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 z-10 group-hover:opacity-100 duration-[0.5s] w-[140px] h-[35px] lg:w-[155px] lg:h-[50px] group-hover:top-[50%]">
                            <MdOutlineAddShoppingCart /> Səbətə əlavə et
                        </button>
                        <img src={`/dataimg/${card.img}`} alt={card.name} className="w-full object-cover aspect-[3/3]" />
                        <div className="px-[20px] py-[10px]">
                            <h3 className="font-adventPro font-bold text-[25px]">{card.name}</h3>
                            <p className="font-adventPro text-[18px] font-bold">{card.about}</p>
                            <p className="text-othergreen font-semibold">{card.price.toFixed(2)} ₼</p>
                        </div>
                    </div>
                ))}

                {visibleCount < flatCards.length && (
                    <div className="flex justify-center items-center w-full my-[30px] col-span-2 md:col-span-3 xl:col-span-4">
                        <button
                            onClick={() => setVisibleCount(prevCount => prevCount + 8)}
                            className="border-othergreen border-2 text-othergreen rounded-lg px-[20px] py-[10px] font-[600] text-[18px] font-Montserrat">
                            Daha çox ...
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Allcarts