import book from "../api/book";
import {
  FETCH_BOOKS,
  FETCH_OFFERS,
  SELECTED_BOOK,
  UPDATE_BOOKS,
} from "./types";

export const fetchBooks = () => async (dispatch) => {
  const response = await book.get("/books");

  dispatch({
    type: FETCH_BOOKS,
    payload: response.data,
  });
};

export const fetchOffers = (id, total) => async (dispatch) => {
  const response = await book.get(`/books/${id}/commercialOffers`);

  dispatch({
    type: FETCH_OFFERS,
    payload: response.data,
  });
};

export const selectBook = (book) => {
  return {
    type: SELECTED_BOOK,
    payload: book,
  };
};

export const updateBookList = (books, term) => {
  return {
    type: UPDATE_BOOKS,
    payload: { term: term, books: books },
  };
};
