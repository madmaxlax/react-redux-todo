import { VisibilityFilters } from '../actions'

//sets this part of the store {visibilityFilter: ___} 
//to be something new 
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
