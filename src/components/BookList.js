import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import BookCard from "../components/BookCard";
import _ from "lodash";

const style = {
  h1: {
    marginTop: "3em",
  },
  h2: {
    margin: "4em 0em 2em",
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em",
  },
  last: {
    marginBottom: "300px",
  },
};

const renderedList = (books, onBookSelect) => {
  return books.map((book) => {
    return (
      <React.Fragment key={book.isbn}>
        <BookCard book={book} onBookSelect={onBookSelect} />
      </React.Fragment>
    );
  });
};

const BookList = (props) => {
  const books = props.books;
  const onBookSelect = props.onBookSelect;
  return (
    <React.Fragment>
      <Container text>
        <Header
          as="h3"
          content="Henri Potier Book Store"
          style={style.h3}
          textAlign="center"
        />
        {!_.isUndefined(books) ? (
          <Grid columns={2} container stackable>
            <Grid.Row>{renderedList(books, onBookSelect)}</Grid.Row>
          </Grid>
        ) : (
          ""
        )}
      </Container>
    </React.Fragment>
  );
};

export default BookList;
