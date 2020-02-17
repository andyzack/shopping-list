import React, { useState, useEffect } from 'react';
import APISERVICES from '../data/apiservices';
import ProductCard from './ProductCard';

function ProductList() {
  
  // 1A) Use the data state variable
  const [data, setData] = useState([]);

  // 2B) Use the loading state variable
  const [loading, setLoading] = useState(true);
  const [hasError, setErrors] = useState(false);

  // 3B) Use an effect to fetch data using API Service
  useEffect(() => {
    APISERVICES()
    .then(data => {
      setData(data)
    })
    .catch(err => setErrors(err))
  }, []);

  // 1B) Use the dress selected state variable
  const [dressSize, setDressSize] = useState('');

  // 2B) Use the data selected state variable
  let [dataSelected, setDataSelected] = useState([]);

  function handleChange(val, data) {
    setDressSize(val)
    dataSelected = data.filter(item => item.size.includes(val));
    setDataSelected(dataSelected)
  }

  return(
    <>
    <div className="product-header">
      <h1 className="product-title">Women’s tops {dressSize}</h1>
      <select
        className="product-filter"
        value={dressSize}
        onChange={(e) => {handleChange(e.target.value, data)}}
      >
        <option value="">Filter by size</option>
        <option value="XL">Size XL</option>
        <option value="L">Size L</option>
        <option value="S">Size S</option>
        <option value="XS">Size XS</option>
      </select>
    </div>
    <div className="product-container">
      <ul>
      {
        !hasError? (
          (dressSize == '')? (
            data.map(PRODUCT => (
              <ProductCard key={PRODUCT.index} product={PRODUCT} />
            ))
          ) : (
            dataSelected.map(PRODUCT => (
              <ProductCard key={PRODUCT.index} product={PRODUCT} />
            ))
          )

        ) : (<div>Error from API Service</div>)
      }
      </ul>
    </div>
    </>
  )
}

export default ProductList;