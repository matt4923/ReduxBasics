import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({ //combine all state reducers here!!!  Any key here will be a key in the global state
  books: BooksReducer,
  activeBook: ActiveBook 
});

export default rootReducer;
