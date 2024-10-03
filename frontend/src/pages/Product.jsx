import React, { useContext, useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async (req, res, next) => { 
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }

    })
  }

  useEffect(() => { 
    fetchProductData();
  }, [productId, products]);
  
  if (!productData) return <div>Loading...</div>;

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in suraction-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images  */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index) => (
                <img onClick={()=>setImage(item)} key={index} src={item} alt={productData.name} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div style={{color: 'gold'}} className="flex items-center gap-1 mt-4">
            <i className="fa-solid fa-star fa-lg"></i>
            <i className="fa-solid fa-star fa-lg"></i>
            <i className="fa-solid fa-star fa-lg"></i>
            <i className="fa-solid fa-star fa-lg"></i>
            <i className="fa-regular fa-star fa-lg"></i>
            <p style={{color: 'black'}} className="pl-3">(120)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}/-</p>
          <p className="mt-5 text-gray-500 md:w-4/5 text-justify">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size:</p>
            <div className="flex gap-2">
              {
                productData.sizes.map((item, index) => (
                  <button onClick={()=>setSize(item)} key={index} className={`border rounded-md px-4 py-2 ${item === size ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>{item}</button>
                ))
              }
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 rounded-md text-sm active:bg-gray-600">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 my-3 flex flex-col gap-1">
            <p className='my-2' ><i style={{color: 'limegreen'}} className="fa-solid fa-check mr-4 fa-lg"></i>100% Original Product.</p>
            <p className='my-2' ><i style={{color: 'green'}} className="fa-solid fa-hand-holding-dollar mr-3 fa-lg"></i>Cash on Delivery Available.</p>
            <p className='my-2' ><i style={{color: 'blue'}} className="fa-solid fa-arrow-right-arrow-left mr-4 fa-lg"></i>Easy Return and Exchange Policy.</p>
          </div>
        </div>
      </div>
      {/* Description & Reviews Section  */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (120)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-justify text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum animi minima distinctio nesciunt tempore unde magni perspiciatis illo, quidem eveniet tempora non modi cum quos voluptatem, beatae quia voluptates!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt maiores consequatur laboriosam ipsum ratione, architecto amet eum voluptatum numquam ad vero soluta dolorem animi facere autem pariatur quis nemo!</p>
        </div>
      </div>
      {/* Related Products Section  */}
      <RelatedProducts category={productData.category} subCategory={productData.subcategory} productId={ productId} />
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
