import React, { useState, useEffect } from 'react';

function ProductOptions(props) {

  /* Build dropdown filters using API services (WORK IN PROGRESS) */
  const [items] = useState([
    {size: "XL"},
    {size: "L"},
    {size: "M"},
    {size: "S"},
    {size: "XS"}
  ]);

  return (
    <>
    <option value="">Filter by size</option>
    {
      items.map(item => (
        <option key={item.size} value={item.size}>Size {item.size}</option>
      ))
    }
    </>
  )
}

export default ProductOptions;