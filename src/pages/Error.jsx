import React from "react"
import error from "../assets/images/error-icon.png"
import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="h-[100vh] max-w-[85%] m-auto flex flex-col gap-[30px] items-center justify-center">
            <img src={error} alt="error" />
            <h1 className="text-[30px] md:text-[50px] font-[700] font-roboto text-lightgray text-center">OOPS! PAGE NOT FOUND</h1>
            <Link to="/">
                <button className="bg-black text-white font-roboto font-[600] text-[20px] rounded-[50px] border-none px-[40px] py-[15px]">GO BACK</button>
            </Link>
        </div>
    )
}

export default Error