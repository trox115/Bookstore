import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import allReducers from './reducers';
import {Provider} from 'react-redux'

const library = {
  books: [
  {id:1, title:"Peppa pig adventures", category:"Kids",},
  {id:2, title:"21 Lessons for XXI century", category:"ACTION",},
  {id:3, title:"How to make friends", category:"LEARNING",}
]
}

const store = createStore(allReducers, library,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>,
  document.getElementById('root'));
