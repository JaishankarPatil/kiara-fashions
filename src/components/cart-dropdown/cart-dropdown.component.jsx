import React from "react";
import { connect } from "react-redux";

import {
  CartDropdownContainer,
  CartItemContainer,
  EmptyMessage,
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import CheckOutButton from "../checkout-button/checkout-button.component";

const CartDropdown = ({ cartItems }) => (
  <CartDropdownContainer>
    <CartItemContainer>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <EmptyMessage>Your Cart is Empty</EmptyMessage>
      )}
    </CartItemContainer>
    <CheckOutButton />
  </CartDropdownContainer>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
