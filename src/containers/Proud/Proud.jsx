import './proud.css';

import { PRODUCTS } from '../../products';
import { Link } from 'react-router-dom';


const Proud = () => {
    const proudProducts = PRODUCTS.filter((item) => item.id <= 8);

  return (
    <section className="raouf__proud">
        <div className="raouf__proud-content">
            <h2>Products we are proud of</h2>
            <div className="raouf__proud-content_products">
                {proudProducts.map((item) => (
                    <div key={item.id} className="proudProduct">
                        <Link 
                        // onClick={() => window.top(0,0)}
                        to={`/product/${item.id}`}
                        >
                            <div className="proudProduct_image">
                                <img src={item.img} alt="item" />
                            </div>

                            <div className="proudProduct_details">
                                <p>{item.description}</p>
                                <p>${item.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Proud