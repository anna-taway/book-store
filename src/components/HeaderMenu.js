import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Icon, Input, Menu } from "semantic-ui-react";
import _ from "lodash";

const HeaderMenu = ({ onSubmit, isSearchActive }) => {
  let [inputValue, setInputValue] = useState("Search...");
  let x = document.getElementById("querySearch");

  if(!_.isEmpty(x)) {
    if (isSearchActive) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    // Make sure that we call the callback from parent component
    onSubmit(inputValue);
  };

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <Link
            to={{
              pathname: "/",
            }}
          >
            Book Store
          </Link>
        </Menu.Item>
        <Menu.Item id="querySearch" as="form" onSubmit={onFormSubmit}>
          <Input
            type="text"
            value={inputValue}
            onChange={onInputChange}
            icon="search"
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Link
            to={{
              pathname: "/shopping-cart-detail",
            }}
          >
            <Icon name="cart" />
            Shopping Cart
          </Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default HeaderMenu;
