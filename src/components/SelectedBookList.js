import React from "react";
import SelectedBookCard from "./SelectedBookCard";

const SelectedBookList = ({ selectedBook }) => {
  return selectedBook.map((book) => {
    return (
      <React.Fragment key={book.isbn}>
        <SelectedBookCard book={book} />
      </React.Fragment>
    );
  });
};

export default SelectedBookList;
