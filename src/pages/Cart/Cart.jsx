import {React, useContext} from 'react'

import './cart.css';

import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/ShopContext';

import { CartItem } from '../../components';

import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();
  return (
    <div className="raouf__cart">
        <div className="raouf__cart-content">

            <div className="raouf__cart-content_header">
                <h1>Your Cart Items</h1>
            </div>

            <div className="raouf__cart-content_products">
                {PRODUCTS.map((product, index) => {
                    if (cartItems[product.id] !== 0){
                        return <CartItem 
                                data={product} 
                                key={`cartProduct-${product.id}_${index}`}
                                />
                    }
                    else {
                        return null;
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="raouf__cart-content_total" key="content_total">
                    <p>Total: ${totalAmount}.00</p>

                    <div className="raouf__cart-content_total-buttons">
                        <button onClick={() => navigate("/")} >Continue Shopping</button>
                        <button>Checkout</button>
                    </div>
                </div>
            ) : (
                <h1 key="empty-cart_header">Your Cart is Empty</h1>
            )}

        </div>
    </div>
  )
}

export default Cart