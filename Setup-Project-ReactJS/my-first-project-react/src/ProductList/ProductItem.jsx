import React, { Component } from 'react'

class ProductItem extends Component {
  render() {
    const { product } = this.props
    return (
      <div>
        <div className='product-item'>
          <input type='text' placeholder='Product ID' value={product.id} />
          <input type='text' placeholder='Product Name' value={product.name} />
          <input type='text' placeholder='Product Price' value={product.price} />
        </div>
      </div>
    )
  }
}

export default ProductItem
