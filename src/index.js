import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import allReducers from './reducers';
import {Provider} from 'react-redux'

const library = {
  books: [
  {id:1, title:"The subtile art of not giving a f*uck", category:"Sci-fi",},
  {id:2, title:"The subtile art of not giving a f*uck", category:"Sci-fi",}
]
}

const store = createStore(allReducers, library,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>,
  document.getElementById('root'));
