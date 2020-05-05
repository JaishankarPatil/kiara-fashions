import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  removeItem,
  clearItemFromCart,
  addItem,
} from "../../../redux/cart/cart.action";

import {
  selectCartItems,
  selectTotalAmount,
  selectTotalQuantity,
} from "../../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutItmsContainer,
  CheckoutItmContainer,
  ImageContainer,
  ItemDescription,
  ItemPrice,
  CheckoutCartHeader,
  CheckoutHeaderName,
  CheckoutHeaderPrice,
  ProceedToBuyContainer,
  TotalAmountContainer,
  TotalAmountSpan,
  PaymentButton,
  ToatalAmoutPayment,
  DescriptionContainer,
  QuantityContainer,
  QuantityUpdate,
  RemoveContainer,
  RemoveButton,
  QuantitySpan,
  QuantityText,
  CurencySym,
  CurencySymSubTotal,
  FaMinusSquareSym,
  FaPlusSquareSym,
} from "./checkout.styles";
const CheckoutPage = ({
  cartItems,
  totalAmount,
  clearItemFromCart,
  removeItem,
  addItem,
  totalQuantity,
}) => {
  return (
    <CheckoutPageContainer>
      <CheckoutItmsContainer>
        <CheckoutCartHeader>
          <CheckoutHeaderName>Shopping Cart</CheckoutHeaderName>
          <CheckoutHeaderPrice>Price</CheckoutHeaderPrice>
        </CheckoutCartHeader>
        {cartItems.map((catItem) => (
          <CheckoutItmContainer>
            <ImageContainer src={catItem.imageUrl} />
            <ItemDescription>
              <DescriptionContainer>{catItem.name}</DescriptionContainer>
              <QuantityContainer>
                <QuantityUpdate>
                  <QuantityText> Qty : </QuantityText>
                  <FaMinusSquareSym onClick={() => removeItem(catItem)} />
                  <QuantitySpan>{catItem.quantity}</QuantitySpan>
                  <FaPlusSquareSym onClick={() => addItem(catItem)} />
                </QuantityUpdate>

                <RemoveContainer>
                  <RemoveButton onClick={() => clearItemFromCart(catItem)}>
                    Remove
                  </RemoveButton>
                </RemoveContainer>
              </QuantityContainer>
            </ItemDescription>
            <CurencySym />
            <ItemPrice>{catItem.price}</ItemPrice>
          </CheckoutItmContainer>
        ))}
        <TotalAmountContainer>
          <TotalAmountSpan>
            {" "}
            Subtotal ({totalQuantity} item ) : <CurencySymSubTotal />{" "}
            {totalAmount}{" "}
          </TotalAmountSpan>
        </TotalAmountContainer>
      </CheckoutItmsContainer>
      <ProceedToBuyContainer>
        <ToatalAmoutPayment>
          Subtotal ({totalQuantity} item ) : <CurencySymSubTotal />{" "}
          {totalAmount}
        </ToatalAmoutPayment>
        <PaymentButton>Proced to Pay</PaymentButton>
      </ProceedToBuyContainer>
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: selectTotalAmount,
  totalQuantity: selectTotalQuantity,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
