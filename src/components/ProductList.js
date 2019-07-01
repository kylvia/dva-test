import React from 'react'
import Proptypes from 'prop-types'
import { Table, Popconfirm, Button } from 'antd'

const ProductList = ({onDelete, products}) => {
  const columns = [{
    title: 'Name',
    key:'name',
    dataIndex: 'name'
  }, {
    title: 'Actions',
    key: record => record.id,
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => {onDelete(record.id)}}>
          <Button>Delete</Button>
        </Popconfirm>
      )
    }
  }]

  return (
    <Table
      dataSource={products}
      columns={columns}
    />
  )
}

ProductList.propTypes = {
  onDelete: Proptypes.func.isRequired,
  products: Proptypes.array.isRequired
}

export default ProductList
