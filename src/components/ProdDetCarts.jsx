import { FiSearch } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

const ProdDetCarts = ({ products }) => {
    const navigate = useNavigate()
    
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[20px] max-w-[85%] m-auto my-[80px] xl:max-w-[75%] xl:my-[125px] xl:gap-x-[40px] xl:gap-y-[30px]">
            {products.map(item => (
                item.cards.map(card => (
                    <div key={card.id} className="border-[2px] border-othergreen rounded-[10px] overflow-hidden relative border-box group" >
                        <button className="flex items-center justify-center gap-[5px] bg-white text-black border-0 rounded-[50px] font-[500] border-box font-roboto absolute left-1/2 transform -translate-x-1/2 top-[50%] shadow-lg opacity-0 z-10 py-[10px] px-[20px] duration-[0.6s] group-hover:opacity-100 hover:text-orange group-hover:top-[68%] group-hover:-translate-y-1/2"
                            onClick={() => {
                                window.scrollTo(0, 0)
                                navigate(`/details/${card.id}`)
                            }}>
                            <FiSearch className="text-[15px]" />ətraflı
                        </button>
                        <div className="overflow-hidden">
                            <img src={`/dataimg/${card.img}`} alt={card.name} className="w-full aspect-[4/3] object-cover duration-[0.3s] group-hover:scale-[1.2]" />
                        </div>
                        <div className="px-[22px] py-[15px] text-center bg-bggray">
                            <div className="flex gap-1 justify-center">
                                <p className="font-adventPro font-bold text-[18px]">{card.name}</p>
                                <p className="font-adventPro font-bold text-[18px]">{card.about}</p>
                            </div>
                            <p className="text-lightgray">{card.price.toFixed(2)} ₼</p>
                        </div>
                    </div>
                ))
            ))}
        </div>
    )
}

export default ProdDetCarts