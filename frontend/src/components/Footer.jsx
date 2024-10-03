import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
    function instagramLink() {
        window.open("https://instagram.com/iamjatin_g/");
    }
    function githubLink() {
        window.open("https://github.com/iamjatin-g");
    }
    function twitterLink() {
        window.open("https://x.com/iamjatin_g");
    }
    function threadsLink() {
        window.open("https://threads.net/@iamjatin_g");
    }
    function pinterestLink() {
        window.open("https://in.pinterest.com/");
    }

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
                    <div className="flex my-3 cursor-pointer">
                        <i onClick={instagramLink} style={{color: '#962fbf'}} className="fa-brands fa-instagram fa-2xl mr-5 my-5"></i>
                        <i onClick={githubLink} className="fa-brands fa-github fa-2xl mr-5 my-5"></i>
                        <i onClick={twitterLink} style={{color: 'skyblue'}} className="fa-brands fa-twitter fa-2xl mr-5 my-5"></i>
                        <i onClick={threadsLink} className="fa-brands fa-threads fa-2xl mr-5 my-5"></i>
                        <i onClick={pinterestLink} style={{color: 'red'}} className="fa-brands fa-pinterest fa-2xl mr-5 my-5"></i>

                    </div>
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
