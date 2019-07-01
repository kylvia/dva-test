import React from 'react'
import TodoListUI from '../components/TodoListUI'
import {connect} from "dva";

const TodoList = ({dispatch, mapStateToProps }) => {

  function changeInputVal(e) {
    dispatch({
      type: 'todoList/change_val',
      payload: e.target.value
    })
  }
  function addItem() {
    dispatch({
      type: 'todoList/add_item'
    })
  }
  function deleteItem(idx) {
    dispatch({
      type: 'todoList/delete_item',
      payload: idx
    })
  }

  return (
    <TodoListUI
      inputVal={mapStateToProps.inputVal}
      list={mapStateToProps.list}
      addItem={addItem}
      deleteItem={deleteItem}
      changeInputVal={changeInputVal}
    />
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    inputVal: state.todo_list.inputVal,
    list: state.todo_list.list,
  }
}

export default connect(mapStateToProps)(TodoList)
