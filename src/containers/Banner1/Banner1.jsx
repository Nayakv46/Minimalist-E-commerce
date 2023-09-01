import { Link } from 'react-router-dom'
import './banner1.css'

import banner1img from '../../assets/layout/banner1img.jpg'

const Banner1 = () => {
  return (
    <section className="raouf__banner1">
        <div className="raouf__banner1-content">
            <div className="raouf__banner1-content_text">
                <h2>Creative harmonious living</h2>
                <p>RAOUF products are all made to standard sizes so that you can mix and match them freely.</p>
                <Link to="/categories/all">
                    <button>SHOP NOW</button>
                </Link>
            </div>

            <div className="raouf__banner1-content_image">
                <img src={banner1img} alt="shelfes" />
            </div>
        </div>
    </section>
  )
}

export default Banner1