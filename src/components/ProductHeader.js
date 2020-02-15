import React, { Component } from 'react';

class ProductHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: {},
      defaultSize: ''
    }
  }

  handleChange(e) {
    this.setState({
      defaultSize: e.target.value
    });
  }

  render() {
    return(
      <>
      <div className="product-header">
        <h1 className="product-title">Women’s tops</h1>
        <select
          className="product-filter"
          value={this.state.defaultSize}
          onChange={(e) => {
            this.handleChange(e)
          }}
        >
          <option value="">Filter by size</option>
          <option value="XL">Size XL</option>
          <option value="L">Size L</option>
          <option value="S">Size S</option>
          <option value="XS">Size XS</option>
        </select>
      </div>
      </>
    )
  }
}

export default ProductHeader;