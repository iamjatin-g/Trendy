import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about} className='w-full md:max-w-[450px]' alt="" />
        <div className="flex flex-col justify-center text-justify gap-6 md:w-[60%] text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi velit</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <b className="text-gray-800 text-lg">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-justify mb-20">
        <div className="border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5">
          <b><i style={{color: 'gold'}} className="fa-solid fa-star mr-2 fa-xl"></i>Quality Assurance:</b>
          <p className='text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore dicta.</p>
        </div>
        <div className="border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5">
          <b><i style={{color: 'green'}} className="fa-regular fa-handshake mr-2 fa-xl"></i>Convenience:</b>
          <p className='text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore dicta.</p>
        </div>
        <div className="border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5">
          <b><i style={{color: 'orange'}} className="fa-solid fa-headset mr-2 fa-xl"></i>Exceptional Customer Service:</b>
          <p className='text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore dicta.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
