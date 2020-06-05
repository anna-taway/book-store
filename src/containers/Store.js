import React from "react";
import { connect } from "react-redux";
import { fetchBooks, selectBook, updateBookList } from "../actions";
import HeaderMenu from "../components/HeaderMenu";
import BookList from "../components/BookList";
import Footer from "../components/Footer";
import _ from "lodash";

class Store extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchBooks();
    this.props.updateBookList(this.props.books);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.books !== nextProps.books) {
      return true;
    }
    if (
      this.props.currentlyDisplayedBooks !== nextProps.currentlyDisplayedBooks
    ) {
      return true;
    }

    return false;
  }

  onSearchSubmit = (term) => {
    this.props.updateBookList(this.props.books, term);
  };

  onBookSelect = (book) => {
    this.props.selectBook(book);
  };

  render() {
    return (
      <div>
        <HeaderMenu onSubmit={this.onSearchSubmit} isSearchActive={true} />

        {_.isEmpty(this.props.books) ? (
          <div>...Loading</div>
        ) : (
          <BookList
            books={
              _.isEmpty(this.props.currentlyDisplayedBooks)
                ? this.props.books
                : this.props.currentlyDisplayedBooks
            }
            onBookSelect={this.onBookSelect}
          />
        )}

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    currentlyDisplayedBooks: state.currentlyDisplayedBooks,
    selectedBook: state.selectedBook,
  };
};

export default connect(mapStateToProps, {
  fetchBooks,
  selectBook,
  updateBookList,
})(Store);
