import { combineReducers } from 'redux';
import books from './books.js';

const allReducers = combineReducers({
  books
});

export default allReducers;
