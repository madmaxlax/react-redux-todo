//all the possible actions that we can expect to happen to our store
//no actions are actually happening here. that happens in the 
//individual reducers. having this as a separate file seems annoying


//keep track of the index for todos. could use guuuids or something
let nextTodoId = 0

//it accepts only a text string to go into the whole new todo item
//and sends an object to be handled by the dispatcher AddTodo
//and is then sent to the reducer. 
//the reducer sees the type: and knows what to do
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})


//this is just a totally separate struct. 
//it has nothing to do with actions but is just kept here
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
