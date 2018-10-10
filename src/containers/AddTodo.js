import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

//creates a new component AddTodo, accepts an 
const AddTodo = ({ dispatch }) => {

  //helps set upa the 'ref' object,
  //a special react thing for handling uncontrolled elements
  let input

  return (
    <div>
      <form onSubmit={e => {
        //the functionality for handling the submit is just done right here
        e.preventDefault()
        //dont do anything if its empty
        if (!input.value.trim()) {
          return
        }
        //use dispatch to grab the addTodo action. send it this new value
        //addTodo will set the object up to be send to dispatch, 
        // {
        //   type: 'ADD_TODO',
        //   id: nextTodoId++,
        //   text
        // }
        //which will check the type and dispatch it to the correct reducer
        //which is 
        // const todos = (state = [], action) => {
        //   switch (action.type) {
        //     case 'ADD_TODO':
        //       return [
        //         ...state,//keep all the todo's in the list already
        //         {//add one new todo object with the 
        //           id: action.id,
        //           text: action.text,
        //           completed: false
        //         }
        //       ]
        dispatch(addTodo(input.value))
        //return the input field to empty
        input.value = ''
      }}>
      {/* use the ref thing built into react. 
      input is that var we set up earlier.  */}
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
