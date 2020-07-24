import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductOptions from './ProductOptions';
import IMAGES from '../data/images';
//import ShoppingData from '../data/db.json';
import ErrorBoundary from '../error-boundary';

import useCustomFetch from '../data/useCustomFetch'

function ProductList() {

  // 3a. Use an effect to fetch data using API Service
  const url = 'http://dev.tti.com.au/wp-content/themes/tti/js/db.json';

  //const url = ShoppingData;
  const [data, loading, hasError] = useCustomFetch(url);

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
      <ErrorBoundary>
        <ProductOptions items={data} />
      </ErrorBoundary>
      </select>
    </div>
    <div className={"product-container " + (loading? "out" : "in")}>
      <ul>
      {
        loading? (
          <li className="col-error"><div className="loader"></div></li>
        ) : ''
      }
      {
        !hasError? (
          <ErrorBoundary>
            <ProductCard items={(dressSize == '') ? data : dataSelected} pics={IMAGES} />
          </ErrorBoundary>
          ) : <li className="col-error">There has been a problem with your fetch operation/API Service!</li>
      }
      </ul>
    </div>
    </>
  )
}

export default ProductList;