import React from "react";
import { connect } from "react-redux";
import { CheckOutButtonContainer } from "./checkout-button.styles";
import { withRouter } from "react-router-dom";
import { toggelCartDropdown } from "../../redux/cart/cart.action";

const CheckOutButton = ({ history, closeCartDropDown }) => (
  <CheckOutButtonContainer
    onClick={() => {
      history.push("/checkout");
      closeCartDropDown();
    }}
  >
    GO TO CHECKOUT
  </CheckOutButtonContainer>
);

const mapDispatchToProps = (dispatch) => ({
  closeCartDropDown: () => dispatch(toggelCartDropdown()),
});

export default withRouter(connect(null, mapDispatchToProps)(CheckOutButton));
