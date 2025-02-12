import { FiSearch } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

const Cart = ({ card,showDiscount }) => {
    const navigate = useNavigate()
    return (
        <div className="border-[2px] border-othergreen rounded-[10px] overflow-hidden relative border-box group">
            <button className="flex items-center justify-center gap-[5px] text-othergreen bg-white border-0 rounded-[50px] font-[500] border-box font-roboto absolute left-1/2 transform -translate-x-1/2 top-[50%] shadow-lg opacity-0 z-10 py-[10px] px-[20px] duration-[0.4s] group-hover:opacity-100 group-hover:top-[63%] hover:text-orange group-hover:-translate-y-1/2"
                onClick={() => {
                    window.scrollTo(0, 0)
                    navigate(`/details/${card.id}`)
                }}>
                <FiSearch className="text-[15px]" />ətraflı
            </button>
            <div className="overflow-hidden">
                <img src={`/dataimg/${card.img}`} alt={card.name} className="w-full object-cover aspect-[3/3]" />
            </div>
            <div className="px-[20px] py-[10px]">
                <h3 className="font-adventPro font-bold text-[25px]">{card.name}</h3>
                <p className="font-adventPro text-[18px] font-bold">{card.about}</p>
                <p className="text-othergreen font-semibold">{card.price.toFixed(2)} ₼</p>
            </div>
            {showDiscount && card.endirim !=0 && (
                <span className="w-10 h-10 flex justify-center items-center text-white font-[500] bg-red-500 rounded-full absolute top-1 left-1 font-roboto">{card.endirim}%</span>
            )}
        </div>
    )
}

export default Cart
