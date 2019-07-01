import React, {Fragment} from 'react'
import { Input ,List ,Button } from 'antd'

const TodoListUI = ({inputVal, list=[], addItem, deleteItem, changeInputVal}) => {
  return (
    <Fragment>
      <div><Input onChange={changeInputVal} value={inputVal}/><Button onClick={addItem}>提交</Button></div>
      <List
        bordered
        dataSource={list}
        renderItem={(item,index) => <List.Item onClick={()=>{deleteItem(index)}}>{item}</List.Item>}
      />
    </Fragment>
  )
}

export default TodoListUI
