import './sideCart.css';
import { Link } from 'react-router-dom';
import { X } from 'phosphor-react';

import emptyCart from '../../assets/layout/empty-cart.png';

import { PRODUCTS } from '../../products';

import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import SideCartItem from '../SideCartItem/SideCartItem';

const SideCart = (props) => {

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();
  return (
    <>
        <div 
        className={`sideCart-overlay ${props.overlayState}`}
        onClick={() => props.setToggleView(false)}>

        </div>
        <div className={props.className}>
            
            <div className="raouf__sideCart-content">
                <h2>Your Shopping Cart
                    {Object.values(cartItems).reduce((a, b) => a + b, 0) >= 0 
                    && (
                        <>
                            &nbsp;({Object.values(cartItems).reduce((a, b) => a + b, 0)})
                        </>
                        )
                    }
                </h2>
                {Object.values(cartItems).reduce((a,b) => a + b, 0) > 0 ? (
                    <>
                    <div className="raouf__sideCart-content_products">
                    {PRODUCTS.map((product, index) => {
                        if (cartItems[product.id] !== 0){
                            return <SideCartItem 
                                    data={product} setToggleView={props.setToggleView} 
                                    key={`sideCart-${product.description}-${product.id}_${index}`}
                                    />
                        } else {
                            return null;
                        }
                    })}
                    </div>

                    <div className="raouf__sideCart-content_total">
                        <div className="raouf__sideCart-content_total-left">
                            <h2>Subtotal:</h2>

                            <h2>${totalAmount}.00</h2>
                        </div>

                        <div className="raouf__sideCart-content_total-right">
                            <Link to="/cart">
                                <button type="button" onClick={() => props.setToggleView(false)}>Go to Checkout</button>
                            </Link>
                        </div>
                    </div>
                    </>
                    )
                    : (
                    <>
                    <div className='raouf__sideCart-empty'>
                        <img src={emptyCart} alt="empty-cart" />
                        <p>Your cart is empty</p>
                        <button type="button" onClick={() => props.setToggleView(false)}>Keep Browsing</button>
                    </div>
                    </>
                    )
                }
            </div>
            
            <X size={24} onClick={() => props.setToggleView(false)} />
        </div>
    </>
  )
}

export default SideCart