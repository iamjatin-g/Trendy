import React, { useContext, useEffect , useState, createContext } from 'react'
import {products} from '../assets/assets'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props)=> {
    
    const currency = '$';
    const delivery_fee = 10;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => { 
        // Code for adding product to cart goes here
        
        if (!size) {
            toast.error('Please select a size'); 
            return;
        }

        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size]++;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {[size]: 1};
        }
        setCartItems(cartData);
    }
    
    const getCartCount = () => { 
        let count = 0;
        for (let item in cartItems) {
            for (let size in cartItems[item]) {
                count += cartItems[item][size];
            }
        }
        return count;
    }

    const updateQuantity = async (itemId, size, quantity) => { 
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => { 
        let total = 0;
        for (let items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (let item in cartItems[items]) { 
                try {
                    if (cartItems[items][item] > 0) {
                        total += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return total;
    }

    const value = {
        products, currency, delivery_fee, showSearch, setSearch, search, setShowSearch, cartItems, setCartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;