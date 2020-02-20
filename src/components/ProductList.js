import React, { useState, useEffect } from 'react';
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
  const url = 'https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3'

  useEffect(() => {
    fetch(url)
    .then(res => {
      if (!res.ok) {
        return Promise.rejected(
          new Error('Network response was not ok')
        )
      }
      return res.json()
    })
    .then(data => {
      getProductData(data)
    })
    .catch(err => {
      setErrors(err)
      setLoading(false)
    })
  }, []);

  function getProductData(data) {
    setLoading(true)
    sleep(2000)
    .then(() => {
      setData(data)
      setLoading(false)
    })
  }

  function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }

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
        loading? (
          <li className="col-error"><div className="loader"></div></li>
        ) : ''
      }
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