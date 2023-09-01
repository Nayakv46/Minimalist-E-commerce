import React from 'react'
import './shop.css';

import { Banner1, Banner2, Home, Newsletter, Proud, Trending } from '../../containers';

const Shop = () => {
  return (
    <>
      <Home />
      <Proud />
      <Banner1 />
      <Trending />
      <Banner2 />
      <Newsletter />
    </>
  )
}

export default Shop