import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ShoppingCart, List, X } from 'phosphor-react';

import { ShopContext } from '../../context/ShopContext';
import logo from '../../assets/layout/raouf_logo.png';
import SideCart from '../SideCart/SideCart';

const Menu = (props) => (
  <>
    <Link 
      to="/categories/all"
      onClick={() => props.setToggleMenu(false)}
    >
      CATEGORIES
    </Link>

    <Link 
      to="/product/19"
      onClick={() => props.setToggleMenu(false)}
    >
      PRODUCT PAGE
    </Link>
  </>
)

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  const [toggleMenu, setToggleMenu] = useState(false);

  const [toggleView, setToggleView] = useState(false);
  
  return (
    <>
      <div className='raouf__navbar'>
        <div className="raouf__navbar-content">
          <div className="raouf__navbar-content_logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className='raouf__navbar-content_links'>
            
            <Menu setToggleMenu={setToggleMenu} />

              <button type="button" onClick={() => setToggleView(true)}>
                <ShoppingCart size={24} />
                {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 
                && <div className="raouf__navbar-content_links-cart">
                  <span>{Object.values(cartItems).reduce((a, b) => a + b, 0)}</span>
                  </div>
                }
              </button>

            <List size={28}
              onClick={() => setToggleMenu(true)}
            />

          </div>
        </div>
      </div>
      
      <div className={`raouf__navbar-mobile ${toggleMenu ? "open-menu" : "closed-menu"}`}>
        <X size={32} onClick={() => setToggleMenu(false)} />
        <Menu setToggleMenu={setToggleMenu} />
      </div>

      <SideCart className={`raouf__sideCart ${toggleView ? "open-sideCart" : "closed-sideCart"}`} overlayState={`${toggleView ? "show-overlay" : "hide-overlay"}`} setToggleView={setToggleView} />
    </>
  )
}

export default Navbar