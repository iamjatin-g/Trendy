import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App';


const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [sizes, setSizes] = useState([]);
  const [customize, setCustomize] = useState(false);
  const [bestseller, setBestseller] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      // Append form data to formData
      formData.append('name', name);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('subcategory', subcategory);
      formData.append('price', price);
      formData.append('sizes', JSON.stringify(sizes));
      formData.append('bestseller', bestseller);
      formData.append('customize', customize);

      // Append images to formData
      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      // Send request to server to add product
      console.log(token);
      const response = await axios.post(backendUrl + "/api/product/add", formData, { header: { 'token': `${token}` } });

      console.log(response.data);

    } catch (error) {

    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Images  */}
      <div>
        <p className='font-bold text-xl mt-9'>Upload Image</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-1 mt-8 ">
          <label htmlFor="image1">
            {
              !image1
                ? <i className="fa-solid fa-cloud-arrow-up fa-5x border border-dotted hover:border-dashed border-black p-4 sm:p-4 md:p-4 lg:p-2 xl:p-4 cursor-pointer"></i>
                : <img className='object-cover w-full sm:w-[400px] h-64' src={URL.createObjectURL(image1)} alt="" />
            }
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1' accept="image/*" hidden />
          </label>
          <label htmlFor="image2">
            {
              !image2
                ? <i className="fa-solid fa-cloud-arrow-up fa-5x border border-dotted hover:border-dashed border-black p-4 sm:p-4 md:p-4 lg:p-2 xl:p-4 cursor-pointer"></i>
                : <img className='object-cover w-full sm:w-[400px] h-64' src={URL.createObjectURL(image2)} alt="" />
            }
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id='image2' accept="image/*" hidden />
          </label>
          <label htmlFor="image3">
            {
              !image3
                ? <i className="fa-solid fa-cloud-arrow-up fa-5x border border-dotted hover:border-dashed border-black p-4 sm:p-4 md:p-4 lg:p-2 xl:p-4 cursor-pointer"></i>
                : <img className='object-cover w-full sm:w-[400px] h-64' src={URL.createObjectURL(image3)} alt="" />
            }
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id='image3' accept="image/*" hidden />
          </label>
          <label htmlFor="image4">
            {
              !image4
                ? <i className="fa-solid fa-cloud-arrow-up fa-5x border border-dotted hover:border-dashed border-black p-4 sm:p-4 md:p-4 lg:p-2 xl:p-4 cursor-pointer"></i>
                : <img className='object-cover w-full sm:w-[400px] h-64' src={URL.createObjectURL(image4)} alt="" />
            }
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id='image4' accept="image/*" hidden />
          </label>
        </div>
      </div>
      {/* Name  */}
      <div className='w-full'>
        <p className='font-bold text-xl mt-7 mb-2'>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter product name" className='w-full max-w-[500px] px-3 py-2 border rounded-md  border-gray-300' required />
      </div>
      {/* Description  */}
      <div className='w-full'>
        <p className='font-bold text-xl mt-7 mb-2'>Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Enter product name" className='w-full max-w-[500px] px-3 py-2 border rounded-md  border-gray-300 resize-none' rows='5' required />
      </div>
      {/* Category and Subcategory */}
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8 mt-7'>
        <div>
          <p className='font-bold text-xl mb-2'>Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className='w-full max-w-[500px] px-3 py-2 border rounded-md border-gray-300'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>
        <div>
          <p className='font-bold text-xl mb-2'>Sub Category</p>
          <select onChange={(e) => setSubcategory(e.target.value)} className='w-full max-w-[500px] px-3 py-2 border rounded-md border-gray-300'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
      </div>
      {/* Price  */}
      <div className='w-full mt-7'>
        <p className='font-bold text-xl mb-2'>Product Price</p>
        <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder="Enter product price" className='w-full max-w-[500px] px-3 py-2 border rounded-md  border-gray-300' required />
      </div>
      {/* Sizes  */}
      <div className='w-full mt-7'>
        <p className='font-bold text-xl mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, 'S'])}>
            <p className={`${sizes.includes("S") ? 'bg-black text-white' : 'bg-slate-200 text-black'} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, 'M'])}>
            <p className={`${sizes.includes("M") ? 'bg-black text-white' : 'bg-slate-200 text-black'} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, 'L'])}>
            <p className={`${sizes.includes("L") ? 'bg-black text-white' : 'bg-slate-200 text-black'} px-3 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, 'XL'])}>
            <p className={`${sizes.includes("XL") ? 'bg-black text-white' : 'bg-slate-200 text-black'} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, 'XXL'])}>
            <p className={`${sizes.includes("XXL") ? 'bg-black text-white' : 'bg-slate-200 text-black'} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>
      {/* Bestseller  */}
      <div className='w-full mt-7'>
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
        <label className='cursor-pointer px-4' htmlFor="bestseller">Add to Bestseller</label>
      </div>
      {/* Customize  */}
      <div className='w-full mt-7'>
        <input onChange={() => setCustomize(prev => !prev)} checked={customize} type="checkbox" id="customize" />
        <label className='cursor-pointer px-4' htmlFor="customize">Add to Customize</label>
      </div>
      {/* Submit  */}
      <div className='w-full mt-7'>
        <button className="bg-black font-bold text-white px-6 text-lg py-2 rounded-md active:bg-gray-600" type="submit">Login</button>
      </div>
    </form >
  )
}

export default Add
