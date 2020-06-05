import { UPDATE_BOOKS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BOOKS:
      if (!action.payload.term) {
        return action.payload.books;
      }
      return [
        ...action.payload.books.filter(
          (book) =>
            book.title.includes(action.payload.term) ||
            book.synopsis[0].includes(action.payload.term)
        ),
      ];
    default:
      return state;
  }
};
