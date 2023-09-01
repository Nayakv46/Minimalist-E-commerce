import { PRODUCTS } from '../../products'
import { Link } from 'react-router-dom'

const Lamps = () => {
  const lampProducts = PRODUCTS.filter((product) => product.category === "lamp");
  
  return (
    lampProducts.map((item) => (
      <div key={item.id} className="categoryProduct">
          <Link 
          // onClick={() => window.top(0,0)}
          to={`/product/${item.id}`}
          >
              <div className="categoryProduct_image">
                  <img src={item.img} alt="item" />
              </div>

              <div className="categoryProduct_details">
                  <p>{item.description}</p>
                  <p>${item.price}</p>
              </div>
          </Link>
      </div>
    ))
  )
}

export default Lamps