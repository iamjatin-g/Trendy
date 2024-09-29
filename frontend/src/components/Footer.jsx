import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <img src={assets.logo_bold} className='mb-5 w-36' alt="" />
                    <p className="w-full md:w-2/3 text-justify text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quaerat rem, sapiente assumenda at cam corrupti placeat odio deserunt nobis!</p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+91-98765-43210</li>
                        <li>trendy.shop@gmail.com</li>
                    </ul>
                </div>
                
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">Copyright 2024 @trendy.com - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
