import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import allReducers from './reducers';

const library = {
  books: [
    { id: 1, name: 'Peppa pig adventures', category: 'Kids' },
    { id: 2, name: '21 Lessons for XXI century', category: 'ACTION' },
    { id: 3, name: 'How to make friends', category: 'LEARNING' },
  ],
};

const store = createStore(allReducers, library);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
