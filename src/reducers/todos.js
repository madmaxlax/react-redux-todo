
//sets the default state to an empty array if none is set

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,//keep all the todo's in the list already
        {//add one new todo object with the 
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
    //goes through and toggles the completed part
    //.map returns a re-compiled array
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
    //always return the state by default
      return state
  }
}

export default todos
