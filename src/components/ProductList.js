import React, { useState, useEffect } from 'react';
import APISERVICES from '../data/apiservices';
import ProductCard from './ProductCard';

function ProductList() {
  
  // 1. Use the data state variable
  const [data, setData] = useState([]);

  // 2. Use the loading state variable
  const [loading, setLoading] = useState(true);
  const [hasError, setErrors] = useState(false);

  // 3. Use an effect to fetch data using API Service
  useEffect(() => {
    APISERVICES()
    .then(setData)
    .catch(err => setErrors(err))
  }, []);

  return(
    
    <div className="product-container">
      <ul>
      {
        !hasError? (
        data.map(PRODUCT => (
          <ProductCard key={PRODUCT.index} product={PRODUCT} />
        ))
        ) : (<div>Error from API Service</div>)
      }
      </ul>
    </div>
  )
}

export default ProductList;