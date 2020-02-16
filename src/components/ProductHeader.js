import React, { useState, useEffect } from 'react';

function ProductHeader() {
  
  const [dressSize, useDressSize] = useState('XL');

  let message = `You selected ${dressSize} dress size`;

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You selected ${dressSize} dress size`;
  });
  
  return(
    <>
    <div className="product-header">
      <h1 className="product-title">Women’s tops: <span style={{fontWeight:200}}>{ message }</span></h1>
      <div>
        <select
          className="product-filter"
          value={dressSize}
          onChange={(e) => {useDressSize(e.target.value)}}
        >
          <option value="">Filter by size</option>
          <option value="XL">Size XL</option>
          <option value="L">Size L</option>
          <option value="S">Size S</option>
          <option value="XS">Size XS</option>
        </select>
      </div>
    </div>
    </>
  )
}

export default ProductHeader;