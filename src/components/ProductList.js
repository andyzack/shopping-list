import React, { useState, useEffect } from 'react';
import APISERVICES from '../data/apiservices';
import ProductCard from './ProductCard';

function ProductList() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    APISERVICES()
    .then(setData)
  }, []);

  return(
    <div className="product-container">
      <ul>
      {
        data.map(PRODUCT => (
          <ProductCard key={PRODUCT.index} product={PRODUCT} />
        ))
      }
      </ul>
    </div>
  )
}

export default ProductList;