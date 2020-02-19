import React from 'react';
import PropTypes from 'prop-types';

function ProductCard(props) {

  // 1a. Get image data
  const pics = props.pics

  // 2. Get product data
  const product = props.items

  return(
    <>
    {
      product.map(item => (
        <li key={item.index} className={"product col-"+product.length}>
        <div className="product-card">
          <div className="product-top">

            <div className="product-image">
            <img src={pics[item.index].productImage} />
            </div>
          </div>
          <div className="product-bottom">
            <div className="product-banners">
              <div>
              {
                item.isSale? (
                  <span className="product-sale">Sale</span>
                ):''
              }
              </div>
              <div>
              {
                item.isExclusive? (
                  <span className="product-merchandising">Exclusive</span>
                ):''
              }
              </div>  
            </div>
            <div className="product-cta">
              <span className="product-name">{item.productName}</span>
              <span className="product-price">{item.price}</span>
            </div>
          </div>
        </div>
      </li>
      ))
    }
    </>
  )
}

// Typechecking With PropTypes

ProductCard.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  productImage: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.string,
  isSale: PropTypes.bool,
  isExclusive: PropTypes.bool
};

export default ProductCard;