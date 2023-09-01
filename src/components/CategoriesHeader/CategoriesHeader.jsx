import { Link } from 'react-router-dom';
import { useState } from 'react';
import './categoriesHeader.css';

import { CaretLeft } from 'phosphor-react';

const CategoriesHeader = () => {
    const location = window.location.href;
    
    const [category, setCategory] = useState(location.slice(location.lastIndexOf("/") + 1));

  return (
    <section className="raouf__categoriesHeader">
        <div className="raouf__categoriesHeader-content">
            <div className="raouf__categoriesHeader-content_title">
                <Link to="/">
                    <CaretLeft />Home
                </Link>
                <h3>{category}</h3>
            </div>

            <div className="raouf__categoriesHeader-content_filters">
                <Link 
                to="all"
                onClick={() => setCategory("All")}>
                    All
                </Link>

                <Link 
                to="furnitures"
                onClick={() => setCategory("Furnitures")}>
                    Furnitures
                </Link>

                <Link 
                to="electronics"
                onClick={() => setCategory("Electronics")}>
                    Electronics
                </Link>

                <Link 
                to="lamps"
                onClick={() => setCategory("Lamps")}>
                    Lamps
                </Link>

                <Link 
                to="kitchen" 
                onClick={() => setCategory("Kitchen")}>
                    Kitchen
                </Link>

                <Link 
                to="chairs"
                onClick={() => setCategory("Chairs")}>
                    Chairs
                </Link>

                <Link 
                to="skin-care"
                onClick={() => setCategory("Skin Care")}>
                    Skin Care
                </Link>
            </div>
        </div>
    </section>
  )
}

export default CategoriesHeader