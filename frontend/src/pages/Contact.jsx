import React from 'react'
import Title from '../components/Title'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import {assets} from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <img src={assets.contact} className='w-full md:max-w-[500px]' alt="" />
          <div className="flex flex-col justify-center items-start text-justify gap-6">
            <p className="font-semibold text-2xl text-gray-600">Our Store</p>
            <p className="text-gray-500">Lorem ipsum dolor sit amet.<br />Lorem ipsum dolor sit amet consectetur.</p>
            <p className="text-gray-500">Tel: +91-98765-43210</p>
            <p className="text-gray-500">Email: trendy.shop@gmail.com</p>
          </div>
      </div>
      <OurPolicy />
      <NewsLetterBox/>

      </div>
  )
}

export default Contact
