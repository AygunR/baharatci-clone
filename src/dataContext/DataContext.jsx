import { createContext, useEffect, useState } from "react"

export const DataCntx = createContext()

export default function DataContext({ children }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const [isBasketOpen, setIsBasketOpen] = useState(false)
    const [basket, setBasket] = useState(() => {
        const savedBasket = localStorage.getItem("basketProduct")
        return savedBasket ? JSON.parse(savedBasket) : []
    })

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/AygunR/spice_data/refs/heads/main/data.json')
            .then(res => res.json())
            .then(item => (
                setData(item.data),
                setLoading(false)
            ))
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    
    useEffect(() => {
        localStorage.setItem("basketProduct", JSON.stringify(basket))
    }, [basket])

    const getTotalPrice = () => {
        return basket.reduce((total, item) => total + item.price * item.quantity, 0)
    }
    const getItemsQuantity = () => {
        return basket.reduce((total, item) => total + item.quantity, 0)}

    const dataObj = { data, setData, loading, sideMenuOpen, setSideMenuOpen, isBasketOpen, setIsBasketOpen, basket, setBasket, getTotalPrice, getItemsQuantity }


    return (
        <DataCntx.Provider value={dataObj}>
            {children}
        </DataCntx.Provider>
    )
}