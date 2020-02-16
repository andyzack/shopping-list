import React, { Component } from 'react';
import IMAGES from '../data/images';

const Product = props => {
  const imgdata = [ IMAGES ]
  const { index, productImage, productName, price, isSale, isExclusive, size } = props.product;
  
  return(
    <>
    <li>
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

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3')
    .then(response => response.json())
    .then(json => {
      this.setState({ data: json });
    })
    .catch(error => alert(error.message))
  }

  render() {

    return(
      <div className="product-container">
      <ul>
      {
        this.state.data.map(PRODUCT => (
          <Product key={PRODUCT.index} product={PRODUCT} />
        ))
      }
      </ul>
    </div>
      
    )
  }
}

export default Products;