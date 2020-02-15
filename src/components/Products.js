import React, { Component } from 'react';
import IMAGES from '../data/images';

const ProductImage = () => {
  return(
    <div>
      {
        this.imgdata.map(IMAGES => (
          (items, index) => console.log("items")
        ))
      }
    </div>
  )
}

const Product = props => {
  const imgdata = []
  const { productImage, productName, price } = props.product;
  return(
    <>
    <li>
      <div className="product-image">
        <div className="product-image">{productImage}</div>
        <span className="product-name">{productName}</span>
        <span className="product-price">{price}</span>
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