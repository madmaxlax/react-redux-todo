import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'


//combine reducers puts all the reducers and their 'types' together 
//in a list and then knows which actions to send them off to
export default combineReducers({
  todos,
  visibilityFilter
})

//sneak peak at the actions
// type: 'ADD_TODO',
// type: 'SET_VISIBILITY_FILTER',
// type: 'TOGGLE_TODO',
