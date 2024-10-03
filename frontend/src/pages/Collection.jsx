import React, { useContext, useEffect , useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  // Filter Products
  const handleCategory = (event) => {
    const selectedCategory = event.target.value;
    if (category.includes(selectedCategory)) {
      setCategory(prev => prev.filter(item => item !== selectedCategory));
      
    } else {
      setCategory(prev => [...prev, selectedCategory]);
    }
  }

  const handleSubCategory = (event) => {
    const selectedSubCategory = event.target.value;
    if (subCategory.includes(selectedSubCategory)) {
      setSubCategory(prev => prev.filter(item => item!== selectedSubCategory));
      
    } else {
      setSubCategory(prev => [...prev, selectedSubCategory]);
    }
  }

  const applyFilter = () => {
    let filteredProducts = [...products];

    if (showSearch && search) {
      filteredProducts = filteredProducts.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      filteredProducts = filteredProducts.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      filteredProducts = filteredProducts.filter(item => subCategory.includes(item.subcategory));
    }
    setFilterProducts(filteredProducts);
  }

  const sortProducts = () => {
    let filteredProducts = [...products];
    switch (sortType) {
      case 'low-high':
        setFilterProducts(filteredProducts.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(filteredProducts.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    setFilterProducts(products.slice(0))
  }, [])

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);
  
  useEffect(() => {
    sortProducts();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
          <span className="sm:hidden"><i className={`fa-solid fa-caret-right fa-lg ${showFilter ? 'rotate-90' : ''}`}></i></span>
        </p>

        {/* Category Filter */}
        <div className={`border rounded-md border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-bold">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Men'} onChange={handleCategory}/> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Women'} onChange={handleCategory}/> Women
            </p>
            {/* <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Customize'} onChange={handleCategory}/> Customize
            </p> */}
          </div>
        </div>

        {/* Category Filter */}
        <div className={`border rounded-md border-gray-300 pl-5 py-3 my-3 mb-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-bold">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Topwear'} onChange={handleSubCategory}/> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Bottomwear'} onChange={handleSubCategory}/> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Winterwear'} onChange={handleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} name="" id="" className="border-2 rounded-md border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection

