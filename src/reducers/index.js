import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';

const allReducers = combineReducers({
  books,
  filter,
});

export default allReducers;
