export default {
  namespace:'todo_list',
  state: {
    inputVal: 'todo info',
    list: [1,2,3]
  },
  reducers: {
    'change_val'(state, {payload: val}){
      console.log(val)
      const newState = JSON.parse(JSON.stringify(state))
      newState.inputVal = val
      return newState
    },
    'add_item'(state){
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputVal)
      newState.inputVal = ''
      return newState
    },
    'delete_item'(state, {paylod: idx}){
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(idx, 1)
      return newState
    }
  }
}
