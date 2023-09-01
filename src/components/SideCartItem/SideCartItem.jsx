import { useContext } from 'react'
import { ShopContext } from "../../context/ShopContext";
import './sideCartItem.css';

import { X } from 'phosphor-react';
import { Link } from 'react-router-dom';

const SideCartItem = (props) => {
    const { id, description, price, img } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount, removeAllFromCart } = useContext(ShopContext);
    
  return (
    <div className="raouf__sideCart-product" key={`sideCartProduct-${id}`}>
        <div className="raouf__sideCart-product_image">
          <Link to={`/product/${id}`} onClick={() => props.setToggleView(false)} >
            <img src={img} alt="product" />
          </Link>
        </div>

        <div className="raouf__sideCart-product_description">
          <div className="raouf__sideCart-product_description-left">
            <Link to={`/product/${id}`} onClick={() => props.setToggleView(false)} >{description}</Link>

            <div className="raouf__sideCart-product_description-left_countHandler">

              <button onClick={() => removeFromCart(id)}> - </button>
                  
              <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) } />

              <button onClick={() => addToCart(id)}> + </button>

            </div>
          </div>

          <div className="raouf__sideCart-product_description-right">
            <p>${price * cartItems[id]}.00</p>

            <X size={20} onClick={() => removeAllFromCart(id)} />
          </div>
        </div>
    </div>
  )
}

export default SideCartItem