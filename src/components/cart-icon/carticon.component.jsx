import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { ReactComponent as CartIconImage } from "../../assets/supermarket.svg";
import { toggelCartDropdown } from "../../redux/cart/cart.action";
import {
  CartIconContainer,
  CartIconSize,
  CartItemsCount,
} from "./carticon.styles";

import { selectTotalQuantity } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggelDropdown, totalQuantity }) => (
  <CartIconContainer>
    <CartIconSize>
      <CartIconImage onClick={toggelDropdown} />
    </CartIconSize>
    <CartItemsCount>
      <span>{totalQuantity}</span>
    </CartItemsCount>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  totalQuantity: selectTotalQuantity,
});

const mapDispatchToProps = (dispatch) => ({
  toggelDropdown: () => dispatch(toggelCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
