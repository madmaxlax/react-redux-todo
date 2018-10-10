import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import "./index.css";
//this is the main, starter file

//const? i guess because it's technically immutable?
//you need to pass the reducers to the store so 
//it knows how to work with the store
const store = createStore(rootReducer)

render(
  //need to wrap in a provider so that you can get the store attribute
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
//root element argument only needed when you tie it to something originally on the DOM. 
//otherwise it will be called when you <App> callit