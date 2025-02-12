import React, { useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { DataCntx } from "../dataContext/DataContext"
import { FaCheck } from "react-icons/fa"
import { MdOutlineAddShoppingCart } from "react-icons/md"
import ProdDetCarts from "../components/ProdDetCarts"
import AOS from "aos"
import "aos/dist/aos.css"
import Swal from "sweetalert2"

const Details = () => {
    const { data, basket, setBasket } = useContext(DataCntx)
    const { id } = useParams()
    const navigate = useNavigate()

    const product = data
        .flatMap(item => item.cards)
        .find(card => card.id === Number(id))

    const products = data.filter(item => item.cards.some(card => card.id !== Number(id) && card.category === product?.category))

    useEffect(() => {
        if (!product && id) {
            navigate('/error')
        }
    }, [product, id, navigate])

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    }, [])

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

    function sendToBasket(id) {
        if (basket.some(item => item.id === id)) {
            setBasket(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
        } else {
            setBasket(prev => [...prev, { ...product, quantity: 1 }])
        }
    }

    return (
        <div>
            {product && (
                <div className="flex flex-col md:flex-row mt-[30px] mb-[150px] max-w-[95%] m-auto justify-center gap-[30px] items-center" data-aos="fade-up">
                    <img src={`/dataimg/${product.img}`} alt={product.name} className="w-[300px] sm:w-[500px] object-cover object-center" />
                    <div className="flex flex-col gap-[10px]">
                        <h1 className="font-bold text-[35px] font-adventPro">{product.name}</h1>
                        <p className="text-othergreen text-[20px] font-[500] font-roboto">{product.price} ₼</p>
                        <p className="font-roboto text-[20px] text-[#4e4e4e] font-[500]"><FaCheck className="inline mr-1 text-othergreen " />{product.about}</p>
                        <p className="font-roboto text-[20px] text-[#4e4e4e] font-[500]"><FaCheck className="inline mr-1 text-othergreen " />100% Təbii</p>
                        <p className="font-roboto text-[20px] text-[#4e4e4e] font-[500]"><FaCheck className="inline mr-1 text-othergreen" />Müştərinin istəyindən asılı həcm</p>
                        <button onClick={() => {
                            sendToBasket(product.id)
                            showSuccessAlert()
                        }}
                            className="flex items-center justify-center gap-[5px] bg-othergreen text-white border-box border-0 rounded-[50px] font-[500] font-roboto w-[177px] h-[50px] mt-[55px] hover:bg-opacity-90"><MdOutlineAddShoppingCart />Səbətə əlavə et</button>
                    </div>
                </div>
            )}
            <h2 className="text-othergreen font-amatic text-[30px] sm:text-[50px] text-center mt-[100px]" data-aos="fade-up">Oxşar Məhsullar</h2>
            <ProdDetCarts products={products} />
        </div>
    )
}

export default Details