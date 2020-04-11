import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import allReducers from './reducers';

const GlobalStyle = createGlobalStyle`
  body {
    background:#f5f6fa;
  }
`;
const library = {
  books: [
    { id: 1, name: 'Peppa pig adventures', category: 'Kids' },
    { id: 2, name: '21 Lessons for XXI century', category: 'Action' },
    { id: 3, name: 'How to make friends', category: 'Learning' },
  ],
  filter: 'All',
};

const store = createStore(allReducers, library, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
);
