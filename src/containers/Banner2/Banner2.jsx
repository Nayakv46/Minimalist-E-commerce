import { Link } from 'react-router-dom'
import './banner2.css'

import banner2img from '../../assets/layout/banner2img.jpg'

const Banner2 = () => {
  return (
    <section className="raouf__banner2">
        <div className="raouf__banner2-content">
            <div className="raouf__banner2-content_text">
                <h2>Comfortable & Elegant Living</h2>
                <p>RAOUF products are all made to standard sizes so that you can mix and match them freely.</p>
                <Link to="/categories/all">
                    <button>SHOP NOW</button>
                </Link>
            </div>

            <div className="raouf__banner2-content_image">
                <img src={banner2img} alt="shelfes" />
            </div>
        </div>
    </section>
  )
}

export default Banner2