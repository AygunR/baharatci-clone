import { useContext, useEffect, useState } from "react"
import { DataCntx } from "../dataContext/DataContext"
import { useLocation, useNavigate } from "react-router-dom"

const Search = ({ isSearchOpen, setIsSearchOpen }) => {
  const { data, setIsBasketOpen } = useContext(DataCntx)
  const location = useLocation()
  const navigate = useNavigate()
  const [inpValue, setInpValue] = useState("")
  const [seacrhList, setSeacrhList] = useState([])

  useEffect(() => {
    if (inpValue) {
      const filtered = data.map(item => item.cards).flat().filter(card => card.name.toLowerCase().includes(inpValue.toLowerCase()))
      setSeacrhList(filtered)
    } else {
      setSeacrhList([])
    }
  }, [inpValue, data])

  useEffect(() => {
    setInpValue("")
    setIsSearchOpen(false)
  }, [location, setIsSearchOpen,setIsBasketOpen])

  useEffect(() => {
    !isSearchOpen ? setInpValue("") : ""
  }, [isSearchOpen])

  return (
    <div className={`flex justify-center relative bg-transparent transition-all duration-[0.3] ${isSearchOpen ? "opacity-100" : "opacity-0 overflow-hidden"}`}>
      <input
        type="text"
        placeholder="Axtar..."
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
        className={`w-[70%] m-auto absolute z-[30] text-[15px] font-[400] border-none outline-none rounded-[20px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] font-roboto px-[15px] py-[10px] transition-[top,opacity] duration-500 ease-in-out ${isSearchOpen ? "top-[-2px] opacity-100" : "top-[-50px] opacity-0"}`} />
      <ul className="absolute top-[45px] w-[70%] bg-white rounded-lg shadow-lg z-[40] max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        {seacrhList.length > 0 ? (
          seacrhList.map((item) => (
            <li key={item.id} className="px-4 py-2 border-b last:border-b-0 cursor-pointer text-[18px] hover:bg-gray-100"
              onClick={() => {
                window.scrollTo(0, 0)
                navigate(`/details/${item.id}`)
              }}>
              {item.name} {(item.about.includes("Üyüdülmüş") || item.about.includes("Qovrulmuş")) ? item.about.split(" ")[0] : ""}
            </li>
          ))
        ) : " "}
      </ul>
    </div>
  )
}

export default Search