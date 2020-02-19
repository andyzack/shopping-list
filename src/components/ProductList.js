import React, { useState, useEffect } from 'react';
import APISERVICES from '../data/apiservices';
import ProductCard from './ProductCard';
import ProductOptions from './ProductOptions';
import IMAGES from '../data/images';

function ProductList() {
  
  // 1a. Use the data state variable
  const [data, setData] = useState([]);

  // 2a. Use the loading state variable
  const [loading, setLoading] = useState(true);
  const [hasError, setErrors] = useState(false);

  // 3a. Use an effect to fetch data using API Service
  useEffect(() => {
    APISERVICES()
    .then(setData)
    .catch(err => setErrors(err))
  }, []);

  // 1b. Use the dress selected state variable
  const [dressSize, setDressSize] = useState('');

  // 2b. Use the data selected state variable
  let [dataSelected, setDataSelected] = useState([]);

  // 3b. Helper function to handle menu change
  function handleChange(val, data) {
    setDressSize(val)
    dataSelected = data.filter(item => item.size.includes(val));
    setDataSelected(dataSelected);
  }

  return( 
    <>
    <div className="product-header">
      <h1 className="product-title">Women’s tops</h1>
      <select
        className="product-filter"
        value={dressSize}
        onChange={(e) => {handleChange(e.target.value, data)}}
      >
        <ProductOptions items={data} />
      </select>
    </div>
    <div className="product-container">
      <ul>
      {
        !hasError? (
          <ProductCard items={(dressSize == '') ? data : dataSelected} pics={IMAGES} />
          ) : <li className="col-error">There has been a problem with your fetch operation/API Service!</li>
      }
      </ul>
    </div>
    </>
  )
}

export default ProductList;