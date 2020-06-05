import React from "react";
import PaymentDetail from "./PaymentDetail";

const Discount = ({ offers, total }) => {
  let discount = [];
  const calculOffers = offers.offers;

  for (var i = 0; i < calculOffers.length; i++) {
    //console.log(offers[i]);
    if (calculOffers[i].type === "percentage") {
      discount.push((calculOffers[i].value / 100) * total);
    } else if (calculOffers[i].type === "minus") {
      discount.push(calculOffers[i].value);
    } else if (
      calculOffers[i].type === "slice" &&
      calculOffers.sliceValue <= total
    ) {
      discount.push(
        (total / calculOffers[i].sliceValue) * calculOffers[i].value
      );
    }
  }

  return (
    <React.Fragment>
      <PaymentDetail label="Discount" value={Math.max(...discount)+" €"} />
      <PaymentDetail
        label="Total after discount"
        value={total - Math.max(...discount)+" €"}
      />
    </React.Fragment>
  );
};

export default Discount;
