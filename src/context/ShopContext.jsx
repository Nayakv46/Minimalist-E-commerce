import React, { createContext, useState, useEffect } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    if(sessionStorage.getItem("cartItems")){
        return JSON.parse(sessionStorage.getItem("cartItems"))
    } else {
        let cart = {};
        for (let i = 1; i <= PRODUCTS.length; i++){
            cart[i] = 0;
        }
        return cart;
    }
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if (cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))

                totalAmount += cartItems[item] * itemInfo.price;
            }
        }

        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const removeAllFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0}) )
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const addMultipleToCart = (itemId, amount) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + amount }))
    }


    const contextValue = { 
        cartItems, 
        addToCart, 
        removeFromCart, 
        removeAllFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        addMultipleToCart
    };

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider