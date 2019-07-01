import React, { Fragment } from 'react'
import { connect } from 'dva'
import ProductList from '../components/ProductList'

const Products = ({dispatch, products}) => {
  function handleDelete(id){
    dispatch({
      type: 'products/delete',
      payload: id
    })
  }
  return(
    <Fragment>
      <h2>List of Products</h2>
      <ProductList onDelete = {handleDelete} products={products} />
    </Fragment>
  )
}

export default connect(({products}) => ({
  products
}))(Products)
