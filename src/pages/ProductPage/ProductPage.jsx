import './productPage.css';
import { PRODUCTS } from '../../products';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { Newsletter, Trending } from '../../containers';

import { ShopContext } from '../../context/ShopContext';

const ProductPage = () => {
    const { id } = useParams();
    const product = PRODUCTS.filter((product) => product.id === parseInt(id));
    
    const [shownImage, setShownImage] = useState(product[0].img)

    useEffect(() => {
        setShownImage(product[0].img);
        setQuantity(1);
        }, [id]
    );

    const { addMultipleToCart } = useContext(ShopContext);

    const [quantity, setQuantity] = useState(1);

    const [notification, setNotification] = useState(false);

    const showNotification = () => {
        setNotification(!notification);
    }

  return (
    <>
        <div 
            onAnimationEnd={() => setNotification(false)}
            className={`notification ${notification ? "slide-in" : ""}`}
        >
            <p>Item has been added to the cart ({quantity}) &nbsp; ✅</p>
        </div>

        <section className="raouf__productPage">
            
            <div className='raouf__productPage-content'>
                <div className="raouf__productPage-content_images">
                    <div className="raouf__productPage-content_images-big">
                        <img src={shownImage} alt='other' />
                    </div>

                    <div className="raouf__productPage-content_images-small">   
                        <img 
                        src={product[0].img} 
                        alt='other' 
                        onMouseOver={() => setShownImage(product[0].img)}
                        />
                        <img 
                        src={product[0].otherImgs[0]} 
                        alt='other' 
                        onMouseOver={() => setShownImage(product[0].otherImgs[0])}
                        />
                        <img 
                        src={product[0].otherImgs[1]} 
                        alt='other' 
                        onMouseOver={() => setShownImage(product[0].otherImgs[1])}
                        />
                    </div>
                </div>

                <div className="raouf__productPage-content_description">
                    <h2>{product[0].description}</h2>

                    <p>{product[0].specs}</p>
                    
                    <div className="raouf__productPage-content_description-quantity">
                        <h3>Quantity</h3>
                        <div className="raouf__productPage-content_description-quantity_setter">
                            <button type="button"
                            onClick={() => {
                                if(quantity > 1){
                                    setQuantity(quantity - 1)
                                }
                            }}>
                                -
                            </button>

                            <p className="quantity_display">{quantity}</p>

                            <button type="button"
                            onClick={() => setQuantity(quantity + 1)}>
                                +
                            </button>
                        </div>
                        <h3>${product[0].price*quantity}.00</h3>
                    </div>


                    <div className="raouf__productPage-content_description-buttons">
                        <button type="button"
                        onClick={() => {
                            addMultipleToCart(product[0].id, quantity);
                            showNotification();}}>
                            ADD TO CART
                        </button>
                        <button type="button">
                            BUY NOW
                        </button>
                    </div>
                </div>
            </div>

            <div className="raouf__productPage-specs">
                <div className="raouf__productPage-specs_texture">
                    <h3>Texture:</h3>
                    <p>{product[0].texture}</p>
                </div>

                <div className="raouf__productPage-specs_weight">
                    <h3>Weight:</h3>
                    <p>{product[0].weight}</p>
                </div>

                <div className="raouf__productPage-specs_size">
                    <h3>Size:</h3>
                    <p>{product[0].size}</p>
                </div>
            </div>
        </section>

        <Trending />
        <Newsletter />
    </>
  )
}

export default ProductPage