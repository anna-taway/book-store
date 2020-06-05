import React from "react";
import { List } from "semantic-ui-react";

const PaymentDetail = ({ label, value }) => {
  return (
    <List.Item style={{ marginTop: "2em" }}>
      <List.Content floated="right">
        <span>{value}</span>
      </List.Content>
      <List.Content>{label}</List.Content>
    </List.Item>
  );
};

export default PaymentDetail;
