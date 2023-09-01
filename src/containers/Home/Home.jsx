import './home.css';
import home_img1 from '../../assets/layout/home-img1.jpg';
import home_img2 from '../../assets/layout/home-img2.jpg';
import home_img3 from '../../assets/layout/home-img3.jpg';
import home_img4 from '../../assets/layout/home-img4.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="raouf__home">
        <div className="raouf__home-content">
            <div className="featured grid-one">
              <Link to="/categories/furnitures">
                <div className="dark-overlay"></div>
                <img src={home_img1} alt="img1" />
                <p>Live Comfortably</p>
              </Link>
            </div>

            <div className="featured grid-three">
              <Link to="/categories/skin-care">
                <div className="dark-overlay"></div>
                <img src={home_img2} alt="img1" />
                <p>Skincare</p>
              </Link>
            </div>

            <div className="featured grid-four">
              <Link to="/categories/kitchen">
                <div className="dark-overlay"></div>
                <img src={home_img3} alt="img1" />
                <p>Kitchen</p>
              </Link>
            </div>

            <div className="featured grid-four-bottom">
              <Link to="/categories/electronics">
                <div className="dark-overlay"></div>
                <img src={home_img4} alt="img1" />
                <p>Electronics</p>
              </Link>
            </div>
        </div>
    </section>
  )
}

export default Home