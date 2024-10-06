import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ setToken }) => {
    return (
        <div className='flex items-center justify-between py-2 px-[4%]'>
            {/* <NavLink className='w-[max(8%,80px)]' to='/'> */}
            <img className='w-[max(8%,80px)]' src={assets.logo_bold} alt="" />
            {/* </NavLink> */}
            <p className='text-red-600 font-bold text-sm sm:text-3xl'>ADMIN PANEL</p>
            <button onClick={() => setToken('')} className="bg-black text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-sm sm:text-md active:bg-gray-600">Logout</button>
        </div>
    )
}

export default Navbar
