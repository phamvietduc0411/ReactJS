import React from 'react'
import ProductItem from './ProductItem'
import ButtonCRUD from './ButtonCRUD'

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productsList: [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 }
      ]
    }
  }

  addProduct = () => {
    this.setState((prevState) => ({
      productsList: [
        ...prevState.productsList,
        { 
          id: prevState.productsList.length + 1,
          name: `Product ${prevState.productsList.length + 1}`,
          price: 300
        }
      ]
    }))
  }

  render() {
    const list = this.state.productsList.map((product) => <ProductItem product={product} key={product.id} />)
    
    return (
      <div>
        <h1>Product List</h1>
        <div className='product-list'>{list}</div>
        <ButtonCRUD onClick={this.addProduct} />
      </div>
    )
  }
}
export default ProductList
