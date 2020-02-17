import React, { useState, useEffect } from 'react';
import APISERVICES from '../data/apiservices';
import ProductCard from './ProductCard';
import ProductOptions from './ProductOptions';

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
  const [count, setCount] = useState(4);

  // 3b. Helper function to handle menu change
  function handleChange(val, data) {
    setDressSize(val)
    dataSelected = data.filter(item => item.size.includes(val));
    setDataSelected(dataSelected);
    setCount(dataSelected.length);
  }

  // 3b. Helper function to handle menu list (WORK IN PROGRESS)
  let [dressOption, setDressOption] = useState('');
  function handleClick(data) {
    let idata = data.map(items => items.size)
                .flat()
                .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
    setDressOption(idata);
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
        <ProductOptions items={dressOption} />
      </select>
    </div>
    <div className="product-container">
      <ul>
      {
        !hasError? (
          (dressSize == '')? (
            data.map(PRODUCT => (
              <ProductCard key={PRODUCT.index} product={PRODUCT} num={count} />
            ))
          ) : (
            dataSelected.map(PRODUCT => (
              <ProductCard key={PRODUCT.index} product={PRODUCT} num={count} />
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