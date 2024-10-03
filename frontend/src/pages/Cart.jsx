import React, { useContext, useEffect , useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal';

const Cart = () => {
  
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const temp = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) { 
        if (cartItems[items][item] > 0) {
          temp.push({_id: items, size: item, quantity: cartItems[items][item] }); 
        }
      }
    }
    setCartData(temp);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className="text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const product = products.find(p => p._id === item._id);
            return (
              <div key={index} className="py-2 border-t border-b text-gray-700 items-center gap-4 grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr]">
                <div className="flex items-start gap-6">
                  <img src={product.image[0]} alt={product.name} className='w-16 sm:w-20' />
                  <div>
                    <p className='text-xs sm:text-lg font-bold'>{product.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                    <p>{currency} {product.price}</p> <p className='px-2 sm:px-3 sm:py-1 border rounded-md bg-slate-100'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)} disabled={item.quantity <= 1}><i className="fa-solid fa-minus fa-xs cursor-pointer"></i></button>
                  <span className='mx-2 font-bold'>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}><i className="fa-solid fa-plus fa-xs cursor-pointer"></i></button>
                </div>
                <button onClick={()=>updateQuantity(item._id, item.size, 0)}><i className="fa-solid fa-trash fa-lg cursor-pointer"></i></button>
              </div>
            )
          })
        }
      </div>
      <div className="flex justify-center my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-center">
            <button onClick={()=>navigate('/place-order')} className="bg-black text-white py-3 px-8 my-8 rounded-md">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
