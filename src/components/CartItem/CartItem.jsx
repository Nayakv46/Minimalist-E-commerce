import {React, useContext} from 'react'
import { ShopContext } from "../../context/ShopContext";
import './cartItem.css';
import { X } from 'phosphor-react';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
    const { id, description, price, img } = props.data;
    const { cartItems, addToCart, removeFromCart, removeAllFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="raouf__cartItem" key={`cartItem-${description}-${id}`}>
        <div className="raouf__cartItem-image">
            <Link to={`/product/${id}`}>
                <img src={img} alt="product" />
            </Link>
        </div>

        <div className="raouf__cartItem-description">
            <div className="raouf__cartItem-description_left">
                <Link to={`/product/${id}`}>{description}</Link>
                <div className="raouf__cartItem-description_left-countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) } />

                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
            
            <div className="raouf__cartItem-description_right">
                <p>${price * cartItems[id]}.00</p>
                <X size={24} onClick={() => removeAllFromCart(id)} />
            </div>
        </div>
    </div>
  )
}

export default CartItem