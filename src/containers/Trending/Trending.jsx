import React from 'react'
import './trending.css';

import { PRODUCTS } from '../../products';
import { Link } from 'react-router-dom';

import { CaretLeft, CaretRight } from 'phosphor-react';

const Trending = () => {
    const trendingProducts = PRODUCTS.filter((product) => product.id >= 8);

    const slideLeft = () => {
        document.querySelector(".raouf__trending-content_products").scrollLeft = document.querySelector(".raouf__trending-content_products").scrollLeft - 235;
    }

    const slideRight = () => {
        document.querySelector(".raouf__trending-content_products").scrollLeft = document.querySelector(".raouf__trending-content_products").scrollLeft + 235;
    }


  return (
    <section className="raouf__trending">
        <div className="raouf__trending-content">
            <div className="raouf__trending-content_header">
                <h2>Trending Now</h2>
                <div className="raouf__trending-content_header-buttons">
                    <button onClick={slideLeft}><CaretLeft /></button>
                    <button onClick={slideRight}><CaretRight /></button>
                </div>
            </div>

            <div className="raouf__trending-content_products">
                {trendingProducts.map((product) => (
                    <div className="trendingProduct" key={`trending-${product.id}`}>
                        <Link 
                        to={`/product/${product.id}`}>
                            <div className="trendingProduct-image">
                                <img src={product.img} alt="trending-product" />
                            </div>

                            <div className="trendingProduct-description">
                                <p>{product.description}</p>
                                <p>${product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Trending