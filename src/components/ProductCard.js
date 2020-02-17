import React from 'react';
import PropTypes from 'prop-types';
import IMAGES from '../data/images';

function ProductCard(props) {

  // 1a. Get image data
  const imgdata = [ IMAGES ]

  // 1b. Render props
  const { index, productImage, productName, price, isSale, isExclusive } = props.product;
  
  return(
    <>
    <li className={"product col-" + props.num}>
      <div className="product-card">
        <div className="product-top">

          <div className="product-image">
          {
            imgdata.map(IMAGE => (
              <img key={IMAGE[index].id} src={IMAGE[index].id == index? IMAGE[index].productImage : productImage} />
            ))
          }
          </div>
        </div>
        <div className="product-bottom">
          <div className="product-banners">
            <div>
            {
              isSale? (
                <span className="product-sale">Sale</span>
              ):''
            }
            </div>
            <div>
            {
              isExclusive? (
                <span className="product-merchandising">Exclusive</span>
              ):''
            }
            </div>  
          </div>
          <div className="product-cta">
            <span className="product-name">{productName}</span>
            <span className="product-price">{price}</span>
          </div>
        </div>
      </div>
    </li>
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