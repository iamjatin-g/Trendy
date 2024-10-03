import React, { useContext, useEffect , useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import {useLocation} from 'react-router-dom'

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisisible] = useState(false);
    const location = useLocation();

    useEffect(() => { 
        if (location.pathname.includes('collection')) {
            setVisisible(true);
        } else {
            setVisisible(false);
        }
    }, [location]);

    return showSearch && visible ? (
        <div className="border-t border-b bg-gray-50 text-center">
            <div className="inline-flex items center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/5 sm:w-1/2">
                <input className='flex-1 outline-none bg-inherit text-sm' type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for products..." />
                <button><i className="fa-solid fa-magnifying-glass fa-lg cursor-pointer"></i></button>
            </div>        
            <button onClick={() => setShowSearch(false)}><i className="fa-solid fa-xmark fa-lg cursor-pointer"></i></button>
        </div>
    ) : null
}

export default SearchBar
