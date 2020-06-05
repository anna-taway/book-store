import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Container, List, Item, Button } from "semantic-ui-react";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import SelectedBookList from "../components/SelectedBookList";
import PaymentDetail from "../components/PaymentDetail";
import Discount from "../components/Discount";
import { fetchOffers } from "../actions";

class Payment extends React.Component {
  componentDidMount() {
    const id = this.getId();
    const total = this.updateTotal();
    this.props.fetchOffers(id, total);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.offers !== nextProps.offers) {
      return true;
    }
    if (this.props.selectedBook !== nextProps.selectedBook) {
      return true;
    }

    return false;
  }

  getId = () => {
    let isbnArr = [];

    for (var i = 0; i < this.props.selectedBook.length; i++) {
      isbnArr.push(this.props.selectedBook[i].isbn);
    }
    if (this.props.selectedBook.length > 1) {
      isbnArr.join(",");
    } else {
      isbnArr = isbnArr[0];
    }
    return isbnArr;
  };

  updateTotal = () => {
    let totalBefDisc = 0;
    for (var i = 0; i < this.props.selectedBook.length; i++) {
      totalBefDisc += this.props.selectedBook[i].price;
    }
    return totalBefDisc;
  };

  render() {
    return (
      <div>
        <HeaderMenu isSearchActive={false} />

        <Container text style={{ marginTop: "5em" }}>
          <Item.Group divided>
            <SelectedBookList selectedBook={this.props.selectedBook} />

            <List divided verticalAlign="middle">
              <PaymentDetail
                label="Number of books"
                value={this.props.selectedBook.length}
              />
              <PaymentDetail
                label="Total before discount"
                value={this.updateTotal() + " €"}
              />
              {_.isEmpty(this.props) ? (
                ""
              ) : _.isEmpty(this.props.offers) ? (
                ""
              ) : (
                <Discount
                  offers={this.props.offers}
                  total={this.updateTotal()}
                />
              )}
              <Button positive floated="right" style={{ margin: "25px 0" }}>
                Process for payment
              </Button>
            </List>
          </Item.Group>
        </Container>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedBook: state.selectedBook,
    offers: state.offers,
  };
};

export default connect(mapStateToProps, {
  fetchOffers,
})(Payment);
