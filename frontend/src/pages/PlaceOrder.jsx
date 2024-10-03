import React, { useContext, useEffect , useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('');
  const {navigate} = useContext(ShopContext);
  return (

    <div className='flex flex-col sm:flex-row justify-evenly gap-4 pt-5 sm:pt-14 min-h-[50vh] border-t'>
      {/* Left Side  */}
      <div className="flex flex-col w-full sm:max-w-[700px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'DETAILS'} />
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder="First Name" className="w-full px-3.5 py-3 my-3 border rounded-md border-gray-300" />
          <input type="text" placeholder="Last Name" className="w-full px-3.5 py-3 my-3 border rounded-md border-gray-300" />
        </div>
        <input type="email" placeholder="Email Address" className="w-full px-3.5 py-3 my-3 border rounded-md border-gray-300" />
        <input type="text" placeholder="Address" className="w-full px-3.5 py-3 my-3 border rounded-md border-gray-300" />
        <div className="flex gap-3">
          <input type="text" placeholder="City" className="w-full px-3.5 py-3 my-3 border rounded-md border-gray-300" />
          <input type="text" placeholder="State" className="w-full px-3.5 py-3 my-3 border rounded-md border-gray-300" />
        </div>
        <div className="flex gap-3">
          <input type="number" placeholder="Pincode" className="w-full px-3.5 py-3 my-3 border rounded-md border-gray-300" />
          <input type="text" placeholder="Country" className="w-full px-3.5 py-3 my-3 border rounded-md border-gray-300" />
        </div>
        <input type="number" placeholder="Phone Number" className="w-full px-3.5 py-3 my-3 border rounded-md border-gray-300" />

      </div>
      {/* Right Side  */}
      <div>
        <div className="mt-8 w-full w- min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-8">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className="flex flex-col gap-3">
            <button onClick={()=>setMethod('Gpay')} className={`p-3 px-5 mr-4 border border-orange-600 rounded-md ${method === 'Gpay' ? 'bg-orange-600 text-white' : 'text-orange-600'} `}><i className="fa-brands fa-google-pay fa-2xl"></i></button>
            <button onClick={()=>setMethod('RazorPay')} className={`p-3 px-5 mr-4 border border-blue-800 rounded-md ${method === 'RazorPay' ? 'bg-blue-800 text-white' : 'text-blue-500'} `}>Razor Pay</button>
            <button onClick={()=>setMethod('COD')} className={`p-3 px-5 mr-4 border border-green-600 rounded-md ${method === 'COD' ? 'bg-green-600 text-white' : 'text-green-500'} `}>Cash On Delivery</button>
          </div>
          <div className="flex flex-col mt-8">
              <button onClick={()=>navigate('/orders')} className="bg-black text-white px-8 py-3 rounded-md text-sm active:bg-gray-600">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
