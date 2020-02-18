import React from 'react';

function ProductOptions(props) {

  let dataSizes = props.product.map(item => item.size).flat()
  .reduce((prev, next) => prev.includes(next) ? prev : [...prev, next], []);

  return (
    <>
    <option value="">Filter by size</option>
    {
      dataSizes.map(item => (
        <option key={item} value={item}>Size {item}</option>
      ))
    }
    </>
  )
}

export default ProductOptions;