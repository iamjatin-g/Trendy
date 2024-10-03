import React, { useContext, useEffect , useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({category, subCategory, productId}) => {
    
    const { products, currency } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => { 
        if (products.length > 0) {
            const filteredProducts = products.filter((item) => category === item.category && subCategory === item.subcategory && productId !== item._id);
            setRelated(filteredProducts.slice(0, 5));
        } else {
            console.log(related);
        }
    },[products]);

    return (
        <div className='my-14'>
            <div className="text-center text-3xl py-2">
                <Title text1={'RELATED'} text2={'ITEMS'} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    related.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} currency={currency}/>
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProducts
