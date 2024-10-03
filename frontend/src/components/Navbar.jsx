import React, { useContext, useEffect , useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <NavLink to='/'>
        <img src={assets.logo_bold} className='w-36' alt="" />
      </NavLink>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to='/' className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to='/collection' className="flex flex-col items-center gap-1">
            <p>COLLECTIONS</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to='/about' className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to='/contact' className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <button onClick={()=>setShowSearch(true)} ><i className="fa-solid fa-magnifying-glass fa-lg cursor-pointer"></i></button> 
        <div className="group relative">
          <Link to='/login'><i className="fa-solid fa-user fa-lg cursor-pointer"></i></Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
            </div>
        </div>
        <Link to='/cart' className='relative'>
            <i className="fa-solid fa-cart-shopping fa-lg"></i>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[9px]">{getCartCount()}</p>
        </Link>
        <div className="cursor-pointer sm:hidden">
            <i onClick={()=>setVisible(true)} className="fa-solid fa-bars fa-lg"></i>
        </div>
      </div>
      
      {/* Sidebar menu for small screens */}

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className="side-menu flex flex-col">
                <div className="flex items-center gap-4 p-4">
                  <div onClick={()=>setVisible(false)} className="h-4 cursor-pointer"><i className="fa-solid fa-arrow-left fa-lg m-2"></i>Back</div>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/' > HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTIONS</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar
