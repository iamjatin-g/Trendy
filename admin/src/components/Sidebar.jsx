import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'

const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%]'>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-3 my-4 mt-10 rounded-l-lg" to="/add">
                    <button><i className="fa-solid fa-circle-plus fa-xl text-red-600"></i></button>
                    <p className="hidden md:block">Add Items</p>
                </NavLink>  
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-3 my-4 rounded-l-lg" to="/list">
                    <button><i className="fa-solid fa-list fa-xl text-sky-500"></i></button>
                    <p className="hidden md:block">List Items</p>
                </NavLink>  
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-3 my-4 rounded-l-lg" to="/orders">
                    <button><i className="fa-solid fa-circle-check fa-xl text-lime-500"></i></button>
                    <p className="hidden md:block">Orders</p>
                </NavLink>  
            </div>
        </div>
    )
}

export default Sidebar
