import { combineReducers } from 'redux';
import bookListReducer from './bookListReducer';
import currentlyDisplayedBooksReducer from './currentlyDisplayedBooksReducer';
import offersReducer from './offersReducer';
import selectedBookReducer from './selectedBookReducer';

export default combineReducers({
    books: bookListReducer,
    currentlyDisplayedBooks: currentlyDisplayedBooksReducer,
    offers: offersReducer,
    selectedBook: selectedBookReducer
});