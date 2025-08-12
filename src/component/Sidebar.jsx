import React from 'react'
import { HiArrowDownTray } from "react-icons/hi2";
import { HiCheckCircle } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineFolderOpen } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi2";


function Sidebar({theme, setTheme}) {
    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <div className={`flex justify-center items-center flex-col w-60 h-auto    sidebarshadow rounded-sm sidebar-container bg-white-900 ${theme == 'light' ? 'light' : 'dark'}`}>

            <img className='w-25 h-25 object-cover rounded-full mt-4' src="./pic.jpg" alt="me" />
            <h4 className={`text-sidebar text-xl text-gray-900 flex items-center gap-3 ${theme == 'light' ? 'light' : 'dark'}`}><HiCheckCircle className='hover:text-blue-700' />Antepuesto Teddy</h4>
            <p className={`text-sidebar text-xs text-gray-600 ${theme == 'light' ? 'light': 'dark'}`}>Junior Web Dev.</p>
            <a href="" className={`gap-2 text-resume flex items-center border-gray-300 border-1 w-40 h-8 flex justify-center items-center text-sm hover:text-blue-500 mt-3 hover:border-blue-500 rounded-sm text-gray-700 ${theme == 'light' ? 'light' : 'dark'}`}><HiArrowDownTray />Resume</a>




            <div className={`text-hap flex mt-18 h-10 items-center justify-center gap-1 hover:bg-gray-200 w-full text-gray-700 font-semibold ${theme == 'light' ? 'light' : 'dark'}`}>
                <HiOutlineHome />Home
            </div>
            <div className={` text-hap flex mt-6 h-10 items-center justify-center gap-1 hover:bg-gray-200 w-full text-gray-700 font-semibold ${theme == 'light' ? 'light' : 'dark'}`}>
                <HiOutlineUserCircle />About
            </div>
            <div className={` text-hap flex mt-6 h-10 items-center justify-center gap-1 hover:bg-gray-200 w-full  text-gray-700 font-semibold ${theme == 'light' ? 'light' : 'dark'}`}>
                <HiOutlineFolderOpen />Projects
            </div>

            <div className={`darkmode-container flex items-center gap-3 text-gray-700 font-bold mt-65 bg-gray-200 rounded-xl ${theme == 'light' ? 'light' : 'dark'}`}>
                <div className={` text-sidebar flex items-center gap-2 ${theme == 'light' ? 'light' : 'dark'}`}>
                    <HiMoon />Darkmode
                </div>

                <div
                    onClick={toggle_mode}
                    className="relative w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
                >
                    <div
                        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${theme === 'light' ? 'translate-x-0' : 'translate-x-7'
                            }`}
                    ></div>
                </div>

            </div>
            <p className={` text-sidebar text-gray-900 text-xs pb-2 ${theme == 'light' ? 'light' : 'dark'}`}> © {new Date().getFullYear()} My Portfolio. All rights reserved.</p>

        </div>
    )
}

export default Sidebar
