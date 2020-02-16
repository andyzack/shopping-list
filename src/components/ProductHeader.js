import React, { useState, useEffect } from 'react';

function ProductHeader() {
  
  const [defaultDressSize, useDressSize] = useState('XL');

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${defaultDressSize} times`;
  });
  
  return(
    <>
    <div className="product-header">
      <h1 className="product-title">Women’s tops</h1>
      <div>
        <select
          className="product-filter"
          value={defaultDressSize}
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