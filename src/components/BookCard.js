import React from "react";
import { Icon, Label, Grid, Card } from "semantic-ui-react";
import Synopsis from './Synopsis';

const extra = (
  <React.Fragment>
    <Icon name="star" />
    4,84 (190)
    <Label style={{ marginLeft: "5px" }}>
      Fantastic
    </Label>
  </React.Fragment>
);

const renderBookCover = (cover) => {
  return (
    <React.Fragment>
      <img 
        src={cover} 
        alt="cover"
        style={{ padding: "1em", height: "320px" }} />
    </React.Fragment>
  );
};

const BookCard = (props) => {
    const { isbn, cover, title, price, synopsis } = props.book;
    const onBookSelect = props.onBookSelect;
    return (
        <Grid.Column>
          <Card key={isbn}
            onClick={() => onBookSelect(props.book)}
            image={renderBookCover(cover)}
            header={title}
            meta={price + " €"}
            description={() => <Synopsis synopsis={synopsis} />}
            extra={extra}
            style={{ textAlign: "left", marginBottom: '15px' }}
          />
        </Grid.Column>
      );
};

export default BookCard;
