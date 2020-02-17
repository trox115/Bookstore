import { combineReducers } from 'redux';
import books from './books';

const allReducers = combineReducers({
  books,
});

export default allReducers;
