import React from "react";
import { Item } from "semantic-ui-react";
import Synopsis from "./Synopsis";

const SelectedBookCard = ({ book }) => {
  const { isbn, cover, title, price, synopsis } = book;
  return (
    <React.Fragment key={isbn}>
      <Item>
        <Item.Image src={cover} />
        <Item.Content>
          <Item.Header as="a">{title}</Item.Header>
          <Item.Meta>
            <span>{price + " €"}</span>
          </Item.Meta>
          <Item.Description>
            <Synopsis synopsis={synopsis} />
          </Item.Description>
        </Item.Content>
      </Item>
    </React.Fragment>
  );
};

export default SelectedBookCard;
